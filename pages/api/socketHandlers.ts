import crypto from "crypto";
import qr from "qr-image";
import { v4 } from "uuid";

const states = {};
const multiplexes = {};

const createImage = async (content) =>
  new Promise((resolve, reject) => {
    const chunks = [];

    const stream = qr.image(content);
    stream.on("data", (chunk) => chunks.push(chunk));
    stream.on("end", () => {
      const result = Buffer.concat(chunks);
      resolve(result.toString("base64"));
    });
    stream.on("error", reject);
  });

const mkHash = (remoteId, multiplexId, hashsecret) => {
  return crypto
    .createHash("sha256")
    .update(`${remoteId}-${multiplexId}-${hashsecret}`, "utf8")
    .digest("hex");
};

const initMaster = (socket, initialData, baseUrl, hashsecret) => {
  let remoteId = null;
  let multiplexId = null;
  let hash = null;

  if (
    initialData.remoteId !== null &&
    initialData.multiplexId !== null &&
    initialData.hash !== null &&
    mkHash(initialData.remoteId, initialData.multiplexId, hashsecret) ===
      initialData.hash
  ) {
    remoteId = initialData.remoteId;
    multiplexId = initialData.multiplexId;
    hash = initialData.hash;
  }

  if (remoteId === null) {
    remoteId = v4();
    multiplexId = v4();
    hash = mkHash(remoteId, multiplexId, hashsecret);
  }

  socket.join("master-" + remoteId);

  const remoteUrl = baseUrl + "remote/?" + remoteId;
  const multiplexUrl =
    initialData.shareUrl.replace(/#.*/, "") +
    (initialData.shareUrl.indexOf("?") > 0 ? "&" : "?") +
    "remoteMultiplexId=" +
    multiplexId;

  socket.on("disconnect", () => {
    delete states[remoteId];
    delete multiplexes[multiplexId];
  });

  Promise.all([createImage(remoteUrl), createImage(multiplexUrl)]).then(
    (base64) =>
      socket.emit("init", {
        remoteUrl,
        multiplexUrl,
        hash,
        remoteId,
        multiplexId,
        remoteImage: "data:image/png;base64," + base64[0],
        multiplexImage: "data:image/png;base64," + base64[1],
      })
  );

  socket.on("state_changed", function (data) {
    if (!states.hasOwnProperty(remoteId)) {
      states[remoteId] = {};
    }

    states[remoteId].state = data;
    socket.to("remote-" + remoteId).emit("state_changed", data);
  });

  socket.on("notes_changed", function (data) {
    if (!states.hasOwnProperty(remoteId)) {
      states[remoteId] = {};
    }
    states[remoteId].notes = data;

    socket.to("remote-" + remoteId).emit("notes_changed", data);
  });

  socket.on("multiplex", function (data) {
    multiplexes[multiplexId] = data;

    socket.to("multiplex-" + multiplexId).emit("multiplex", data);
  });
};

const initRemoteControl = (socket, initialData) => {
  const id = initialData.id;
  socket.join("remote-" + id);
  socket.to("master-" + id).emit("client_connected", {});

  if (states.hasOwnProperty(initialData.id)) {
    if (states[initialData.id].notes) {
      socket.emit("notes_changed", states[initialData.id].notes);
    }
    if (states[initialData.id].state) {
      socket.emit("state_changed", states[initialData.id].state);
    }
  }

  socket.on("command", (data) => {
    if (typeof data !== "undefined" && typeof data.command === "string") {
      socket.to("master-" + id).emit("command", {
        command: data.command,
      });
    }
  });
};

const initSlave = (socket, data) => {
  socket.join("multiplex-" + data.id);
  if (multiplexes.hasOwnProperty(data.id)) {
    socket.emit("multiplex", multiplexes[data.id]);
  }
};

export const initConnection = (socket, prefix, hashsecret, ssl) => {
  const host =
    socket.request.headers["x-forwarded-host"] ||
    socket.request.headers["host"];
  const proto =
    socket.request.headers["x-forwarded-proto"] || (ssl ? "https" : "http");

  socket.once("start", (data) => {
    try {
      if (data.type === "master") {
        const url = proto + "://" + host + prefix;
        initMaster(socket, data, url, hashsecret);
      } else if (data.type === "slave") {
        if (!data.id) {
          return;
        }

        initSlave(socket, data);
      } else if (data.type === "remote") {
        if (!data.id) {
          return;
        }

        initRemoteControl(socket, data);
      }
    } catch (e) {
      console.warn(e);
    }
  });
};

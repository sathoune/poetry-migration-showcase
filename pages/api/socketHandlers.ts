import crypto from "crypto";
// @ts-ignore
import qr from "qr-image";
import { v4 } from "uuid";

const states = {};
const multiplexes = {};

// @ts-ignore
const createImage = async (content) =>
  new Promise((resolve, reject) => {
    // @ts-ignore
    let chunks = [];

    const stream = qr.image(content);
    // @ts-ignore
    stream.on("data", (chunk) => chunks.push(chunk));
    stream.on("end", () => {
      // @ts-ignore
      const result = Buffer.concat(chunks);
      resolve(result.toString("base64"));
    });
    stream.on("error", reject);
  });

// @ts-ignore
const mkHash = (remoteId, multiplexId, hashsecret) => {
  return crypto
    .createHash("sha256")
    .update(`${remoteId}-${multiplexId}-${hashsecret}`, "utf8")
    .digest("hex");
};

// @ts-ignore
const initMaster = (socket, initialData, baseUrl, hashsecret) => {
  // @ts-ignore
  let remoteId = null;
  // @ts-ignore
  let multiplexId = null;
  // @ts-ignore
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
    // @ts-ignore
    delete states[remoteId];
    // @ts-ignore
    delete multiplexes[multiplexId];
  });

  Promise.all([createImage(remoteUrl), createImage(multiplexUrl)]).then(
    (base64) =>
      socket.emit("init", {
        remoteUrl,
        multiplexUrl,
        // @ts-ignore
        hash,
        // @ts-ignore
        remoteId,
        // @ts-ignore
        multiplexId,
        remoteImage: "data:image/png;base64," + base64[0],
        multiplexImage: "data:image/png;base64," + base64[1],
      })
  );

  // @ts-ignore
  socket.on("state_changed", function (data) {
    // @ts-ignore
    if (!states.hasOwnProperty(remoteId)) {
      // @ts-ignore
      states[remoteId] = {};
    }

    // @ts-ignore
    states[remoteId].state = data;
    // @ts-ignore
    socket.to("remote-" + remoteId).emit("state_changed", data);
  });

  // @ts-ignore
  socket.on("notes_changed", function (data) {
    // @ts-ignore
    if (!states.hasOwnProperty(remoteId)) {
      // @ts-ignore
      states[remoteId] = {};
    }
    // @ts-ignore
    states[remoteId].notes = data;

    // @ts-ignore
    socket.to("remote-" + remoteId).emit("notes_changed", data);
  });

  // @ts-ignore
  socket.on("multiplex", function (data) {
    // @ts-ignore
    multiplexes[multiplexId] = data;

    // @ts-ignore
    socket.to("multiplex-" + multiplexId).emit("multiplex", data);
  });
};

// @ts-ignore
const initRemoteControl = (socket, initialData) => {
  const id = initialData.id;
  socket.join("remote-" + id);
  socket.to("master-" + id).emit("client_connected", {});

  if (states.hasOwnProperty(initialData.id)) {
    // @ts-ignore
    if (states[initialData.id].notes) {
      // @ts-ignore
      socket.emit("notes_changed", states[initialData.id].notes);
    }
    // @ts-ignore
    if (states[initialData.id].state) {
      // @ts-ignore
      socket.emit("state_changed", states[initialData.id].state);
    }
  }

  // @ts-ignore
  socket.on("command", (data) => {
    if (typeof data !== "undefined" && typeof data.command === "string") {
      socket.to("master-" + id).emit("command", {
        command: data.command,
      });
    }
  });
};

// @ts-ignore
const initSlave = (socket, data) => {
  socket.join("multiplex-" + data.id);
  if (multiplexes.hasOwnProperty(data.id)) {
    // @ts-ignore
    socket.emit("multiplex", multiplexes[data.id]);
  }
};

// @ts-ignore
export const initConnection = (socket, prefix, hashsecret, ssl) => {
  const host =
    socket.request.headers["x-forwarded-host"] ||
    socket.request.headers["host"];
  const proto =
    socket.request.headers["x-forwarded-proto"] || (ssl ? "https" : "http");

  // @ts-ignore
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

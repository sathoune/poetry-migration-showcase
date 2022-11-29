import io from "socket.io-client";
// @ts-ignore
const setupSwipe = ({ sendCommand }) => {
  // @ts-ignore
  var startX,
    // @ts-ignore
    startY,
    isMoving = false,
    target = document.getElementById("notes");

  // @ts-ignore
  target.addEventListener(
    "touchstart",
    function (e) {
      if (e.touches.length === 1) {
        startX = e.touches[0].pageX;
        startY = e.touches[0].pageY;
        isMoving = true;
        // @ts-ignore
        target.addEventListener("touchmove", onTouchMove, false);
        // @ts-ignore
        target.addEventListener("touchend", onTouchEnd, false);
      }
    },
    false
  );

  function onTouchEnd() {
    // @ts-ignore
    target.removeEventListener("touchmove", onTouchMove);
    // @ts-ignore
    target.removeEventListener("touchend", onTouchEnd);
    isMoving = false;
  }

  // @ts-ignore
  function onTouchMove(e) {
    if (isMoving) {
      var x = e.touches[0].pageX,
        y = e.touches[0].pageY,
        // @ts-ignore
        dx = startX - x,
        // @ts-ignore
        dy = startY - y;

      if (Math.abs(dx) >= 25) {
        if (Math.abs(dy) <= 50) {
          sendCommand(dx > 0 ? "next" : "prev");
        }

        onTouchEnd();
      } else if (Math.abs(dy) > 100) {
        onTouchEnd();
      }
    }
  }
};

const a = () => {
  // @ts-ignore
  let socket;

  function init() {
    var path = window.location.pathname.replace(
      /\/remote[^\/]*(?:\?.*)?$/,
      "/api/socket"
    );
    const id = window.location.search.substr(
      1,
      window.location.search.length - 2
    );
    // disabling swipe because it breaks the website
    // setupSwipe({ sendCommand });

    // @ts-ignore
    socket = io.connect({ path: path });

    // @ts-ignore
    socket.on("connect_error", function (err) {
      console.warn("Could not connect to socket.io-remote server", err);
    });
    // @ts-ignore
    socket.on("reconnect_error", function (err) {
      console.warn("Could not reconnect to socket.io-remote server", err);
    });

    socket.on("connect_timeout", function () {
      console.warn("Could not connect to socket.io-remote server (timeout)");
    });
    // @ts-ignore
    socket.on("reconnect_failed", function (err) {
      console.warn(
        "Could not reconnect to socket.io-remote server - this was the last try, giving up",
        err
      );
    });
    // @ts-ignore
    socket.on("error", function (err) {
      console.warn("Unknown error in socket.io", err);
    });

    socket.on("connect", function () {
      console.info("Connected - sending welcome message");
      // @ts-ignore
      socket.emit("start", {
        type: "remote",
        id: id,
      });
    });

    // @ts-ignore
    socket.on("notes_changed", function (data) {
      var text = data.text;
      if (text === undefined || text === null || text.trim() === "") {
        text = "(The current slide has no speaker notes)";
      }
      // @ts-ignore
      document.getElementById("notes").innerHTML = text;
    });

    // @ts-ignore
    socket.on("state_changed", function (data) {
      console.log("New state", data);
      // @ts-ignore
      document.getElementById("progress").style.width =
        Math.floor(data.progress * 100) + "%";
      // @ts-ignore

      document.getElementById("next").className = data.isLastSlide
        ? "disabled"
        : "";
      // @ts-ignore

      document.getElementById("prev").className = data.isFirstSlide
        ? "disabled"
        : "";

      // @ts-ignore
      document.getElementById("left").className = data.availableRoutes.left
        ? ""
        : "disabled";

      // @ts-ignore
      document.getElementById("right").className = data.availableRoutes.right
        ? ""
        : "disabled";

      // @ts-ignore
      document.getElementById("up").className = data.availableRoutes.up
        ? ""
        : "disabled";

      // @ts-ignore
      document.getElementById("down").className = data.availableRoutes.down
        ? ""
        : "disabled";

      // @ts-ignore
      document.getElementById("pause").className = data.isPaused
        ? "pressed"
        : "";

      // @ts-ignore
      document.getElementById("overview").className = data.isOverview
        ? "pressed"
        : "";

      if (data.autoslide) {
        // @ts-ignore
        document.getElementById("autoslide").className = data.isAutoSliding
          ? "pressed"
          : "";
      } else {
        // @ts-ignore
        document.getElementById("autoslide").className = "hidden";
      }
    });
  }
  // @ts-ignore
  function sendCommand(cmd) {
    // @ts-ignore
    socket.emit("command", {
      command: cmd,
    });
  }

  // @ts-ignore
  function command(cmd) {
    return function () {
      sendCommand(cmd);
    };
  }

  function showMenu() {
    document.getElementsByTagName("body")[0].className = "";
  }

  function hideMenu() {
    document.getElementsByTagName("body")[0].className = "collapsed";
  }
  init();

  return {
    next: command("next"),
    prev: command("prev"),
    left: command("left"),
    right: command("right"),
    up: command("up"),
    down: command("down"),
    overview: command("overview"),
    pause: command("pause"),
    autoslide: command("autoslide"),
    showMenu: showMenu,
    hideMenu: hideMenu,
  };
};
export default a();

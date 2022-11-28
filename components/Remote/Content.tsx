// @ts-ignore
// import slideControl from "./scripts";
const slideControl = {
  showMenu: () => {},
  up: () => {},
  next: () => {},
  left: () => {},
  right: () => {},
  prev: () => {},
  down: () => {},
  pause: () => {},
  overview: () => {},
  autoslide: () => {},
  hideMenu: () => {},
};

const Content = () => {
  return (
    <div>
      <div id="notes">(Connecting...)</div>

      <div>
        <div id="progress"></div>
      </div>

      <a
        className="show-button"
        href="components/Remote/Content#"
        onClick={slideControl.showMenu}
      >
        <img src="menu.svg" />
      </a>

      <div className="buttons">
        <div className="arrows">
          <span>&nbsp;</span>
          <a
            href="components/Remote/Content#"
            id="up"
            onClick={slideControl.up}
          >
            <img src="arrow.svg" style={{ transform: "rotate(0.5turn)" }} />
          </a>
          <span>&nbsp;</span>
          <a
            href="components/Remote/Content#"
            id="next"
            onClick={slideControl.next}
          >
            <img src="next.svg" />
          </a>

          <a
            href="components/Remote/Content#"
            id="left"
            onClick={slideControl.left}
          >
            <img src="arrow.svg" style={{ transform: "rotate(0.25turn)" }} />
          </a>
          <span>&nbsp;</span>
          <a
            href="components/Remote/Content#"
            id="right"
            onClick={slideControl.right}
          >
            <img src="arrow.svg" style={{ transform: "rotate(0.75turn)" }} />
          </a>
          <a
            href="components/Remote/Content#"
            id="prev"
            onClick={slideControl.prev}
          >
            <img src="next.svg" style={{ rotate: "180deg" }} />
          </a>

          <span>&nbsp;</span>
          <a
            href="components/Remote/Content#"
            id="down"
            onClick={slideControl.down}
          >
            <img src="arrow.svg" />
          </a>
          <span>&nbsp;</span>
          <a
            href="components/Remote/Content#"
            id="pause"
            onClick={slideControl.pause}
          >
            <img src="off-on.svg" className="hidden-active" />
            <img src="off.svg" className="shown-active" />
          </a>

          <a
            href="components/Remote/Content#"
            id="overview"
            onClick={slideControl.overview}
          >
            <img src="browse-on.svg" className="hidden-active" />
            <img src="browse.svg" className="shown-active" />
          </a>
          <a
            href="components/Remote/Content#"
            id="autoslide"
            onClick={slideControl.autoslide}
          >
            <img src="play-on.svg" className="hidden-active" />
            <img src="play.svg" className="shown-active" />
          </a>
          <span>&nbsp;</span>
          <a
            href="components/Remote/Content#"
            className="hide-button"
            onClick={slideControl.hideMenu}
          >
            <img src="menu.svg" />
          </a>
        </div>

        <div className="copyright">
          <span>
            Icons are{" "}
            <a href="components/Remote/Content" target="_blank">
              CC BY
            </a>{" "}
            from{" "}
            <a href="https://iconsrepo.com" target="_blank">
              iconsrepo
            </a>
            .
          </span>
        </div>
      </div>
    </div>
  );
};
export default Content;

// @ts-ignore
import Reveal from "reveal.js";
import { useEffect } from "react";
import SlidesContainer from "./SlidesContainer";
import RevealRemote from "../remote/plugin";

const Presentation = () => {
  useEffect(() => {
    // To avoid reinitialization with react strict mode
    if (Reveal.hasPlugin && Reveal.hasPlugin("RevealRemote")) {
      return;
    }
    Reveal.initialize({
      controls: true,
      progress: true,
      history: true,
      center: true,
      transition: "slide",
      remote: {
        remote: true,
        path: "/api/socket",
      },
      plugins: [RevealRemote()],
    });
  }, []);
  return (
    <div className="reveal">
      <SlidesContainer />
    </div>
  );
};

export default Presentation;

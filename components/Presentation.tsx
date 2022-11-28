// @ts-ignore
import Reveal from "reveal.js";
import { useEffect } from "react";
import SlidesContainer from "./SlidesContainer";
import RevealRemote from "../remote/plugin";

const Presentation = () => {
  useEffect(() => {
    Reveal.initialize({
      controls: true,
      progress: true,
      history: true,
      center: true,
      transition: "slide",
      plugins: [RevealRemote],
    });
  }, []);
  return (
    <div className="reveal">
      <SlidesContainer />
    </div>
  );
};

export default Presentation;

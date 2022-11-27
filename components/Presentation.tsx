// @ts-ignore
import Reveal from "reveal.js";
import { useEffect } from "react";
import SlidesContainer from "./SlidesContainer";

const Presentation = () => {
  useEffect(() => {
    Reveal.initialize({
      controls: true,
      progress: true,
      history: true,
      center: true,
      transition: "slide",
    });
  }, []);
  return (
    <div className="reveal">
      <SlidesContainer />
    </div>
  );
};

export default Presentation;

// @ts-ignore
import Reveal from "reveal.js";
import { useEffect } from "react";

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
      <div className="slides">
        <section>Slide 1</section>
        <section>Slide 2</section>
        <section>Slide 2</section>
        <section>Slide 2</section>
        <section>Slide 2</section>
        <section>Slide 2</section>
      </div>
    </div>
  );
};

export default Presentation;

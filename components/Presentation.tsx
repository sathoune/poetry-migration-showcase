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
        <section>
          <h1>Daily dose of poetry</h1>
        </section>
        <section>
          <h2>About me</h2>
        </section>
        <section>
          <h2>Agenda</h2>
          <ol>
            <li>What is poetry?</li>
            <li>Why poetry?</li>
            <li>How to write poetry?</li>
            <li>How to read poetry?</li>
          </ol>
        </section>
        <section>
          <h2>Are you crazy? (package.json)</h2>
        </section>
        <section>
          <h2>Finding joy in poetry</h2>
        </section>
        <section>
          <section>
            <h2>Benefits</h2>
          </section>
          <section>
            <h2>No manual labour</h2>
          </section>
          <section>
            <h2>OOO packaging</h2>
          </section>
          <section>
            <h2>pyproject.toml</h2>
          </section>
        </section>
        <section>
          <section>
            <h2>Migration Guide</h2>
          </section>
          <section>
            <h2>Pipenv to Poetry migrate</h2>
          </section>
          <section>
            <h2>From requirements.txt</h2>
          </section>
          <section>
            <h2>Initialize poetry</h2>
          </section>
          <section>
            <h2>
              {" "}
              Paste all dependencies from `requirement.txt` to `pyproject.toml`
            </h2>
          </section>
          <section>
            <h2> Run `poetry install`</h2>
          </section>
          <section>
            <h2>Run `poetry show -t/--tree`</h2>
          </section>
          <section>
            <h2>
              Run `poetry remove package` for those that you identify as
              duplicates
            </h2>
          </section>
          <section>
            <h2>Rinse an repeat</h2>
          </section>
          <section>
            <h2>Adjust pinned dependencies</h2>
          </section>
          <section>
            <h2>Live with eternal glory</h2>
          </section>
        </section>
        <section>
          <h2>Docker integration</h2>
        </section>
        <section>
          <h2>Made with:</h2>
          <ul>
            <li>Next.js</li>
            <li>Reveal.js</li>
          </ul>
          <a href="#/0"></a>
        </section>
      </div>
    </div>
  );
};

export default Presentation;

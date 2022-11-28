import PersonalLinks from "../Commons/PersonalLinks";
import { titleText } from "../utils/titleText";
import PresentationContents from "../Commons/PresentationContents";

const Credits = () => {
  return (
    <section>
      <h2>{titleText}</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <div>
          <h4>Made with:</h4>
          <div>
            <a href="https://revealjs.com/">Reveal.js</a>
          </div>
          <div>
            <a href="https://nextjs.org/">Next.js</a>
          </div>
        </div>

        <PersonalLinks />
        <PresentationContents />
      </div>
    </section>
  );
};

export default Credits;

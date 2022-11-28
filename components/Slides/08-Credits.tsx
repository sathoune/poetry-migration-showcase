import PersonalLinks from "../Commons/PersonalLinks";
import { titleText } from "../utils/titleText";
import PresentationContents from "../Commons/PresentationContents";
import Flex from "../utils/Flex";

const Credits = () => {
  return (
    <section>
      <h2>{titleText}</h2>
      <Flex
        style={{
          marginTop: "10%",
        }}
      >
        <PersonalLinks />
        <PresentationContents />
        <Flex
          style={{
            flexDirection: "column",
            alignItems: "flex-end",
            justifyContent: "flex-start",
          }}
        >
          <h4>Made with:</h4>
          <div>
            <a href="https://revealjs.com/">Reveal.js</a>
          </div>
          <div>
            <a href="https://nextjs.org/">Next.js</a>
          </div>
        </Flex>
      </Flex>
    </section>
  );
};

export default Credits;

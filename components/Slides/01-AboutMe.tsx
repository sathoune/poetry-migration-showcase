import PersonalLinks from "../Commons/PersonalLinks";
import PresentationContents from "../Commons/PresentationContents";
import Flex from "../utils/Flex";

const AboutMe = () => {
  return (
    <section>
      <h2>About me</h2>
      <Flex>
        <PersonalLinks />
        <PresentationContents style={{ alignItems: "flex-end" }} />
      </Flex>
    </section>
  );
};

export default AboutMe;

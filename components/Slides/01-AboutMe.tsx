import PersonalLinks from "../Commons/PersonalLinks";
import PresentationContents from "../Commons/PresentationContents";

const AboutMe = () => {
  return (
    <section>
      <h2>About me</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <PersonalLinks />
        <PresentationContents />
      </div>
    </section>
  );
};

export default AboutMe;

import Title from "./Slides/00-Intro";
import AboutMe from "./Slides/01-AboutMe";
import Agenda from "./Slides/02-Agenda";
import Background from "./Slides/03-Background";
import Solutions from "./Slides/04-Solutions";
import MigrationGuide from "./Slides/05-MigrationGuide";
import Credits from "./Slides/08-Credits";
import Thanks from "./Slides/07-Thanks";
import Docker from "./Slides/06-Docker";

const SlidesContainer = () => {
  return (
    <div className="slides">
      <Title />
      <AboutMe />
      <Agenda />
      <Background />
      <Solutions />
      <MigrationGuide />
      <Docker />
      <Thanks />
      <Credits />
    </div>
  );
};

export default SlidesContainer;

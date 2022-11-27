import Title from "./Slides/00-Title";
import AboutMe from "./Slides/01-AboutMe";
import Agenda from "./Slides/02-Agenda";
import Background from "./Slides/03-Background";
import Solutions from "./Slides/04-Solutions";
import Benefits from "./Slides/05-Benefits";
import MigrationGuide from "./Slides/06-MigrationGuide";
import Credits from "./Slides/08-Credits";
import Thanks from "./Slides/09-Thanks";

const SlidesContainer = () => {
  return (
    <div className="slides">
      <Title />
      <AboutMe />
      <Agenda />
      <Background />
      <Solutions />
      <Benefits />
      <MigrationGuide />
      <Credits />
      <Thanks />
      <Agenda />
    </div>
  );
};

export default SlidesContainer;

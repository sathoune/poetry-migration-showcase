import Title from "./Slides/0-Title";
import AboutMe from "./Slides/1-AboutMe";
import Agenda from "./Slides/2-Agenda";
import Background from "./Slides/4-Background";
import Solutinos from "./Slides/5-Solutions";
import Benefits from "./Slides/6-Benefits";
import MigrationGuide from "./Slides/7-MigrationGuide";
import Credits from "./Slides/9-Credits";
import Thanks from "./Slides/10-Thanks";

const SlidesContainer = () => {
  return (
    <div className="slides">
      <Title />
      <AboutMe />
      <Agenda />
      <Background />
      <Solutinos />
      <Benefits />
      <MigrationGuide />
      <Credits />
      <Thanks />
      <Agenda />
    </div>
  );
};

export default SlidesContainer;

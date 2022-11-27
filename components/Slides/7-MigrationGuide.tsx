import Title from "./MigrationSlides/0-Title";
import PipenvToPoetry from "./MigrationSlides/1-PipenvToPoetry";
import FromRequirements from "./MigrationSlides/2-FromRequirements";
import InitializePoetry from "./MigrationSlides/3-InitializePoetry";
import CopyPaste from "./MigrationSlides/4-CopyPaste";
import PoetryInstall from "./MigrationSlides/5-PoetryInstall";
import PoetryShow from "./MigrationSlides/6-PoetryShow";
import PoetryRemove from "./MigrationSlides/7-PoetryRemove";
import RinseAndRepeat from "./MigrationSlides/8-RinseAndRepeat";
import AdjustPins from "./MigrationSlides/9-AdjustPins";
import Glory from "./MigrationSlides/10-Glory";

const MigrationGuide = () => {
  return (
    <section>
      <Title />
      <PipenvToPoetry />
      <FromRequirements />
      <InitializePoetry />
      <CopyPaste />
      <PoetryInstall />
      <PoetryShow />
      <PoetryRemove />
      <RinseAndRepeat />
      <AdjustPins />
      <Glory />
    </section>
  );
};

export default MigrationGuide;

import Title from "./MigrationSlides/00-Title";
import PipenvToPoetry from "./MigrationSlides/01-PipenvToPoetry";
import FromRequirements from "./MigrationSlides/02-FromRequirements";
import InitializePoetry from "./MigrationSlides/03-InitializePoetry";
import CopyPaste from "./MigrationSlides/04-CopyPaste";
import PoetryInstall from "./MigrationSlides/05-PoetryInstall";
import PoetryShow from "./MigrationSlides/06-PoetryShow";
import PoetryRemove from "./MigrationSlides/07-PoetryRemove";
import RinseAndRepeat from "./MigrationSlides/08-RinseAndRepeat";
import AdjustPins from "./MigrationSlides/09-AdjustPins";
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

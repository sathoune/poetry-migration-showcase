import Flex from "../utils/Flex";
import { CSSProperties } from "react";

const PresentationContents = ({ style }: { style?: CSSProperties }) => {
  return (
    <Flex
      style={{
        flexDirection: "column",
        ...style,
      }}
    >
      <h4>Content available at:</h4>
      <div>
        Hosted at: <a href="">TBD</a>
      </div>
      <div>
        <a href={""}>Presentation source code</a>
      </div>
      <div>
        <a href={""}>Migration source code</a>
      </div>
    </Flex>
  );
};

export default PresentationContents;

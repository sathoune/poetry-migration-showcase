import Flex from "../utils/Flex";

const PersonalLinks = () => {
  return (
    <Flex
      style={{
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <h4>Find me:</h4>
      <div>
        <a href="https://github.com/sathoune">@github</a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/michal-bargiel/">@linkedin</a>
      </div>
      <div>
        <a href="https://bargiel.dev">@bargiel.dev</a>
      </div>
    </Flex>
  );
};

export default PersonalLinks;

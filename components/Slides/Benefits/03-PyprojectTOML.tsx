import Lif from "../../utils/Lif";

const PyprojectTOML = () => {
  return (
    <section>
      <h2>pyproject.toml</h2>
      <ul>
        <Lif>All configurations in one place</Lif>
        <Lif>Except flake8</Lif>
        <Lif>
          <a href={"https://github.com/john-hen/Flake8-pyproject"}>
            Unless you use a plugin
          </a>
        </Lif>
        <Lif>And many more...</Lif>
      </ul>
    </section>
  );
};

export default PyprojectTOML;

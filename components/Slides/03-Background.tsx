import Lif from "../utils/Lif";

const Background = () => {
  return (
    <section>
      <h2>Packaging is a mess</h2>
      <ul>
        <Lif>package.json</Lif>
        <Lif>
          <strong>pip freeze</strong> is unmaintainable
        </Lif>
        <Lif>Pipenv is weird</Lif>
      </ul>
    </section>
  );
};

export default Background;

const PoetryInstall = () => {
  return (
    <section>
      <h2>Install dependencies</h2>
      <pre>
        <code>poetry install</code>
      </pre>
      <img src={"/images/poetry-lock.png"} alt={"Show a new generated file."} />
    </section>
  );
};

export default PoetryInstall;

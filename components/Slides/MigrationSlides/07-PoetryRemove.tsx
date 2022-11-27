const PoetryRemove = () => {
  return (
    <section>
      <div className={"r-stack"}>
        <div>
          <h2>Remove duplicates</h2>
          <pre>
            <code>poetry remove sniffio</code>
          </pre>
        </div>
        <div className="fragment fade-out current-visible">
          <h3>poetry.lock</h3>
          <img
            src={"/images/package-removed.png"}
            alt={"poetry.lock changes"}
          />
        </div>
        <div className="fragment current-visible">
          <h3>pyproject.toml</h3>
          <img
            src={"/images/modified-pyproject.png"}
            alt={"pyproject.toml changes"}
          />
        </div>
      </div>
    </section>
  );
};

export default PoetryRemove;

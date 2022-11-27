const MigrationGuide = () => {
  return (
    <section>
      <section>
        <h2>Migration Guide</h2>
      </section>
      <section>
        <h2>Pipenv to Poetry migrate</h2>
      </section>
      <section>
        <h2>From requirements.txt</h2>
      </section>
      <section>
        <h2>Initialize poetry</h2>
      </section>
      <section>
        <h2>
          {" "}
          Paste all dependencies from `requirement.txt` to `pyproject.toml`
        </h2>
      </section>
      <section>
        <h2> Run `poetry install`</h2>
      </section>
      <section>
        <h2>Run `poetry show -t/--tree`</h2>
      </section>
      <section>
        <h2>
          Run `poetry remove package` for those that you identify as duplicates
        </h2>
      </section>
      <section>
        <h2>Rinse an repeat</h2>
      </section>
      <section>
        <h2>Adjust pinned dependencies</h2>
      </section>
      <section>
        <h2>Live with eternal glory</h2>
      </section>
    </section>
  );
};

export default MigrationGuide;

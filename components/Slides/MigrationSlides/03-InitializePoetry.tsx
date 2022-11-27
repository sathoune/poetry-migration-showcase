const text = `[tool.poetry] 
name = "poetry-migration-example" 
version = "0.1.0"
description = "" 
authors = ["sathoune <michal5bargiel@gmail.com>"]
readme = "README.md" 
packages = [{(include = "poetry_migration_example")}] 

[tool.poetry.dependencies]
python = "^3.11" 

[build-system] 
requires = ["poetry-core"]
build-backend = "poetry.core.masonry.api"`;

const InitializePoetry = () => {
  return (
    <section>
      <div className={"r-stack"}>
        <div className={"fade out"}>
          <h2>Initialize poetry</h2>
          <pre>
            <code>pipx install poetry</code>
            <code>{`poetry init`}</code>
          </pre>
        </div>
        <div className="fragment current-visible">
          <h4>pyproject.toml</h4>
          <pre style={{ backgroundColor: "#084078" }}>
            <code>{text}</code>
          </pre>
        </div>
      </div>
    </section>
  );
};

export default InitializePoetry;

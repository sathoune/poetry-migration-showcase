const pinnedDependencies = `[tool.poetry.dependencies]
python = "^3.11"
asyncpg = "==0.27.0"
fastapi = "==0.88.0"
pandas = "==1.5.2"
redis = "==4.3.5"
sqlalchemy = "==1.4.44"
uvicorn = "==0.20.0"`;

const unPinnedDependencies = `[tool.poetry.dependencies]
python = "^3.11"
asyncpg = "^0.27.0"
fastapi = "^0.88.0"
pandas = "^1.5.2"
redis = "^4.3.5"
sqlalchemy = "^1.4.44"
uvicorn = "^0.20.0"`;

const AdjustPins = () => {
  return (
    <section>
      <h2>Adjust pinned dependencies</h2>
      <div className={"r-stack"}>
        <pre className={"fragment fade-out"}>
          <code>{pinnedDependencies}</code>
        </pre>
        <pre className={"fragment current-visible"}>
          <code>{unPinnedDependencies}</code>
        </pre>
      </div>
    </section>
  );
};

export default AdjustPins;

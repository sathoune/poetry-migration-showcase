const migrationResult = `[tool.poetry.dependencies]
python = "^3.11"
anyio = "==3.6.2"
async-timeout = "==4.0.2"
asyncpg = "==0.27.0"
click = "==8.1.3"
fastapi = "==0.88.0"
h11 = "==0.14.0"
httptools = "==0.5.0"
idna = "==3.4"
numpy = "==1.23.5"
packaging = "==21.3"
pandas = "==1.5.2"
pydantic = "==1.10.2"
pyparsing = "==3.0.9"
python-dateutil = "==2.8.2"
python-dotenv = "==0.21.0"
pytz = "==2022.6"
pyyaml = "==6.0"
redis = "==4.3.5"
six = "==1.16.0"
sniffio = "==1.3.0"
sqlalchemy = "==1.4.44"
starlette = "==0.22.0"
typing-extensions = "==4.4.0"
uvicorn = "==0.20.0"
uvloop = "==0.17.0"
watchfiles = "==0.18.1"
websockets = "==10.4"`;

const CopyPaste = () => {
  return (
    <section>
      <div className="r-stack">
        <div style={{ width: "100%" }}>
          <h2>Populate pyproject.toml</h2>
          <pre>
            <code>pipx install pipenv</code>
            <code>pipx install pipenv-poetry-migrate</code>
            <code>pipenv install</code>
            <code>pipenv-poetry-migrate -f Pipfile -t pyproject.toml </code>
          </pre>
        </div>

        <pre
          className="fragment"
          style={{ backgroundColor: "#1a4a27", width: "100%", height: "100%" }}
        >
          <code>{migrationResult}</code>
        </pre>
      </div>
    </section>
  );
};

export default CopyPaste;

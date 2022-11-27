const mainPackages = `fastapi
uvicorn[standard]
pandas
redis
asyncpg
sqlalchemy`;

const lockedPackages = `anyio==3.6.2
async-timeout==4.0.2
asyncpg==0.27.0
click==8.1.3
fastapi==0.88.0
h11==0.14.0
httptools==0.5.0
idna==3.4
numpy==1.23.5
packaging==21.3
pandas==1.5.2
pydantic==1.10.2
pyparsing==3.0.9
python-dateutil==2.8.2
python-dotenv==0.21.0
pytz==2022.6
PyYAML==6.0
redis==4.3.5
six==1.16.0
sniffio==1.3.0
SQLAlchemy==1.4.44
starlette==0.22.0
typing_extensions==4.4.0
uvicorn==0.20.0
uvloop==0.17.0
watchfiles==0.18.1
websockets==10.4`;

const FromRequirements = () => {
  return (
    <section>
      <div className={"r-stack"}>
        <div>
          <h2>From requirements.txt</h2>
          <pre>
            <code>{mainPackages}</code>
          </pre>
        </div>

        <div
          className="fragment current-visible"
          style={{ backgroundColor: "#781008", width: "80%" }}
        >
          <h4>27 packages</h4>
          <pre>
            <code>{lockedPackages}</code>
          </pre>
        </div>
      </div>
    </section>
  );
};

export default FromRequirements;

const AboutMe = () => {
  return (
    <section>
      <h2>About me</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <div>
          <h4>Find me</h4>
          <ul>
            <li>
              <a href="https://github.com/sathoune">@github</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/michal-bargiel/">
                @linkedin
              </a>
            </li>
            <li>
              <a href="https://bargiel.dev">@bargiel.dev</a>
            </li>
          </ul>
        </div>
        <div>
          <h4>Presentation available at:</h4>
          <ul>
            <li>TBD</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

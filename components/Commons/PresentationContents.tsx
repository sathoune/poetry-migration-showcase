const PresentationContents = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
      }}
    >
      <h4>Content available at:</h4>
      <div>Hosted at: TBD</div>
      <div>
        <a href={""}>Presentation source code</a>
      </div>
      <div>
        <a href={""}>Migration source code</a>
      </div>
    </div>
  );
};

export default PresentationContents;

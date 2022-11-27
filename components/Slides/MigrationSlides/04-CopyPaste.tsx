const CopyPaste = () => {
  return (
    <section>
      <h2>Populating pyproject.toml</h2>
      <pre>
        <code>pipx install pipenv</code>
        <code>pipx install pipenv-poetry-migrate</code>
        <code>pipenv install</code>
        <code>pipenv-poetry-migrate -f Pipfile -t pyproject.toml </code>
      </pre>
    </section>
  );
};

export default CopyPaste;

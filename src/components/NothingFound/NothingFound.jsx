const NothingFound = ({ error }) => {
  return (
    <div className="nothingContainer">
      <p className="nothingText">
        🤷‍♂️ Sorry... an error occurred, or nothing found. Try again
        later, or contact support.
        <br />
        <span className="nothingError">EROR:{error}</span>
      </p>
    </div>
  );
};

export default NothingFound;

import css from '../NothingFound/NothingFound.module.css';

const NothingFound = ({ error }) => {
  return (
    <div className={css.nothing}>
      <p className={css.nothingText}>
        🤷‍♂️ Sorry... an error occurred, or nothing found. Try again later, or contact support.
        <br />
        <span className={css.nothingError}>EROR:{error}</span>
      </p>
    </div>
  );
};

export default NothingFound;

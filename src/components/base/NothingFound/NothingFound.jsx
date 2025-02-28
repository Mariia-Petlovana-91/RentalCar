import css from '../NothingFound/NothingFound.module.css';

const NothingFound = () => {
  return (
    <div
      className={css.nothing}
    >
      <p
        className={
          css.nothingText
        }
      >
        🤷‍♂️ Sorry... an error
        occurred.Try again
        later, or contact
        support.
      </p>
    </div>
  );
};

export default NothingFound;

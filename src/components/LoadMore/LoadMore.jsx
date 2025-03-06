import clsx from 'clsx';

import css from './LoadMore.module.css';

const LoadMore = ({ onClick }) => {
  return (
    <>
      <button
        type="button"
        className={clsx('btn', 'secondaryBtn', css.loadMoreBtn)}
        onClick={onClick}
      >
        Load More
      </button>
    </>
  );
};

export default LoadMore;

import clsx from 'clsx';

import css from '../LoadMore/LoadMore.module.css';

const LoadMore = ({ onClick }) => {
  return (
    <>
      <button
        className={clsx('btn', 'secondaryBtn', css.loadMoreBtn)}
        onClick={onClick}
      >
        Load More
      </button>
    </>
  );
};

export default LoadMore;

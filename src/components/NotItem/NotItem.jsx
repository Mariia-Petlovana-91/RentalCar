import clsx from 'clsx';

const NotItem = () => {
  return (
    <div className={clsx('nothingContainer', 'nothingContainerItem')}>
      <p className="nothingText">
        You have reached the end of the list.
      </p>
    </div>
  );
};

export default NotItem;

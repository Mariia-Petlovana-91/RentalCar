import clsx from 'clsx';

export const onActiveClass = (
  isActive,
  defaultClass,
  active,
) => {
  return clsx(defaultClass, isActive && active);
};

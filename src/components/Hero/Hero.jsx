import clsx from 'clsx';

import { NavLink } from 'react-router-dom';

import css from '../Hero/Hero.module.css';

const Hero = () => {
  return (
    <div className={css.hero}>
      <h1 className="primaryTitle">
        Find your perfect
        rental car
      </h1>
      <p
        className={
          css.heroText
        }
      >
        Reliable and
        budget-friendly
        rentals for any
        journey
      </p>
      <NavLink
        to="/catalog"
        className={clsx(
          'btn',
          'primaryBtn',
          css.heroBtn,
        )}
      >
        View Catalog
      </NavLink>
    </div>
  );
};

export default Hero;

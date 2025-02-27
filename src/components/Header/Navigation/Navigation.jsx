import { NavLink } from 'react-router-dom';

import css from '../Navigation/Navigation.module.css';

import { onActiveClass } from '../../../utils/onActiveClass';

const Navigation = () => {
  return (
    <nav>
      <ul
        className={
          css.navList
        }
      >
        <li
          className={
            css.navItem
          }
        >
          <NavLink
            to="/"
            className={({
              isActive,
            }) =>
              onActiveClass(
                isActive,
                css.navLink,
                css.navActive,
              )
            }
          >
            Home
          </NavLink>
        </li>
        <li
          className={
            css.navItem
          }
        >
          <NavLink
            to="/catalog"
            className={({
              isActive,
            }) =>
              onActiveClass(
                isActive,
                css.navLink,
                css.navActive,
              )
            }
          >
            Catalog
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

import { NavLink } from 'react-router-dom';

import css from '../Logo/Logo.module.css';

import logoIcon from '../../../img/Logo.svg';

const Logo = () => {
  return (
    <>
      <NavLink to="/">
        <img src={logoIcon} alt="logo" className={css.logo} />
      </NavLink>
    </>
  );
};
export default Logo;

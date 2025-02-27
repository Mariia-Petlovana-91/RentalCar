import css from '../Header/Header.module.css';

import Logo from './Logo/Logo';
import Navigation from './Navigation/Navigation';

const Header = () => {
  return (
    <header
      className={css.header}
    >
      <Logo />
      <Navigation />
    </header>
  );
};

export default Header;

import css from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={css.footer}>
      <ul className={css.footerList}>
        <li className={css.footerItem}>Name: Petlovana Mariia</li>
        <li className={css.footerItem}>Email:</li>
        <li className={css.footerItem}>Git:</li>
      </ul>
      <p className={css.footerText}>
        All materials for this project are provided:
      </p>
    </footer>
  );
};

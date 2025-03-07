import css from '../NotFound/NotFound.module.css';
import clsx from 'clsx';

import Section from '../../components/base/Section/Section';

const NotFound = () => {
  return (
    <Section>
      <div className={css.notFoundPage}>
        <h2 className={clsx('secondaryTitle', css.notFoundTitle)}>
          Page not found
        </h2>
        <div className={css.notFoundImg}></div>
      </div>
    </Section>
  );
};

export default NotFound;

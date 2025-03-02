import { HiOutlineCheckCircle } from 'react-icons/hi2';

import css from '../Details.module.css';
import clsx from 'clsx';

const AccessoriesFunctionalitiesList = ({ array }) => {
  return (
    <ul
      className={clsx(
        css.listDetails,
        css.accessoriesFunctionalitiesList,
      )}
    >
      <h3 className="thirdTitle">Accessories and functionalities:</h3>
      {array.map((ar, index) => (
        <li key={index} className={clsx(css.flex, css.itemDetails)}>
          <HiOutlineCheckCircle className={css.iconDetails} />
          <p className={css.textDetails}>{ar}</p>
        </li>
      ))}
    </ul>
  );
};

export default AccessoriesFunctionalitiesList;

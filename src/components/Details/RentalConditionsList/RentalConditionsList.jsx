import { HiOutlineCheckCircle } from 'react-icons/hi2';

import css from '../Details.module.css';
import clsx from 'clsx';

const RentalConditionsList = ({ array }) => {
  return (
    <ul className={css.listDetails}>
      <h3 className="thirdTitle">Rental Conditions: </h3>
      {array.map((ar, index) => (
        <li key={index} className={clsx(css.flex, css.itemDetails)}>
          <HiOutlineCheckCircle className={clsx(css.iconDetails)} />
          <p className={css.textDetails}>{ar}</p>
        </li>
      ))}
    </ul>
  );
};

export default RentalConditionsList;

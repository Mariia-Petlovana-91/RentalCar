import {
  BsCalendar2Week,
  BsFuelPump,
  BsCarFront,
  BsGear,
} from 'react-icons/bs';

import css from '../Details.module.css';
import clsx from 'clsx';

const CarSpecificationsList = ({
  engineSize,
  type,
  year,
  fuelConsumption,
}) => {
  return (
    <>
      <ul className={clsx(css.listDetails)}>
        <h3 className="thirdTitle">Car Specifications:</h3>
        <li className={clsx(css.flex, css.itemDetails)}>
          <BsCalendar2Week className={css.iconDetails} />
          <p className={css.textDetails}>Year: {year}</p>
        </li>
        <li className={clsx(css.flex, css.itemDetails)}>
          <BsCarFront className={css.iconDetails} />
          <p className={css.textDetails}>Type: {type}</p>
        </li>
        <li className={clsx(css.flex, css.itemDetails)}>
          <BsFuelPump className={css.iconDetails} />
          <p className={css.textDetails}>
            Fuel Consumption: {fuelConsumption}
          </p>
        </li>
        <li className={clsx(css.flex, css.itemDetails)}>
          <BsGear className={css.iconDetails} />
          <p className={css.textDetails}>Engine Size: {engineSize}</p>
        </li>
      </ul>
    </>
  );
};

export default CarSpecificationsList;

import css from './Details.module.css';

import defaultImg from '../../img/NotFound_1x.jpg';
import { SlLocationPin } from 'react-icons/sl';

import AccessoriesFunctionalitiesList from './AccessoriesFunctionalitiesList/AccessoriesFunctionalitiesList';
import CarSpecificationsList from './CarSpecificationsList/CarSpecificationsList';
import RentalConditionsList from './RentalConditionsList/RentalConditionsList';
import OrderForm from './OrderForm/OrderForm';
import clsx from 'clsx';
const Details = ({
  img,
  brand,
  rentalConditions,
  functionalities,
  accessories,
  engineSize,
  type,
  year,
  fuelConsumption,
  address,
  mileage,
  rentalPrice,
  description,
}) => {
  const accessoriesFunctional = [
    ...(Array.isArray(functionalities) ? accessories : []),
    ...(Array.isArray(accessories) ? functionalities : []),
  ];
  const specifications = {
    engineSize: engineSize,
    type: type,
    year: year,
    fuelConsumption: fuelConsumption,
  };

  const newAddress = address.split(',');
  const city = newAddress[1];
  const country = newAddress[2];
  const newMileage = mileage.toLocaleString('uk-UA');
  const arr = img.split('/');
  const lastIndex = arr.length - 1;
  const lastElement = arr[lastIndex];
  const id = lastElement.slice(0, 4);

  return (
    <div className={css.carDetailsContainer}>
      <div className={css.firstContainer}>
        <img
          src={img || defaultImg}
          alt={brand}
          className={css.imdDetails}
        />
        <OrderForm />
      </div>
      <div className={css.secondaryContainer}>
        <div className={css.headContainerDetails}>
          <div className={clsx(css.flex, css.titleContainerDetails)}>
            <h2 className={clsx('secondaryTitle', css.titleDetails)}>
              {brand} {year}
            </h2>
            <p className={clsx(css.textDetails, css.idDetails)}>
              Id: {id}
            </p>
          </div>
          <div
            className={clsx(css.flex, css.addressContainerDetails)}
          >
            <p
              className={clsx(css.textDetails, css.adressTextDetails)}
            >
              <SlLocationPin className={css.iconDetails} />
              {city},{country}
            </p>
            <p className={css.textDetails}>Mileage:{newMileage} km</p>
          </div>
          <p className={clsx('secondaryTitle', css.priceTextDetails)}>
            ${rentalPrice}
          </p>
          <p
            className={clsx(css.textDetails, css.descriptTextDetails)}
          >
            {description}
          </p>
        </div>
        <div className={css.listContainerDetails}>
          <RentalConditionsList array={rentalConditions} />
          <CarSpecificationsList {...specifications} />
          <AccessoriesFunctionalitiesList
            array={accessoriesFunctional}
          />
        </div>
      </div>
    </div>
  );
};

export default Details;

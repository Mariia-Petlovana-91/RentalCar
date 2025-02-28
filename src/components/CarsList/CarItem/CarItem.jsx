import { IoHeartOutline } from 'react-icons/io5';

import css from '../CarItem/CarItem.module.css';
import clsx from 'clsx';

const CarItem = ({
  img,
  brand,
  model,
  year,
  rentalPrice,
  address,
  rentalCompany,
  type,
  mileage,
}) => {
  const newAddress =
    address.split(',');
  const city = newAddress[1];
  const country =
    newAddress[2];
  const newMileage =
    mileage.toLocaleString(
      'uk-UA',
    );

  return (
    <>
      <div>
        <img
          src={img}
          alt={brand}
        />
        <button
          type="button"
          className={clsx(
            'btn',
          )}
        >
          <IoHeartOutline />
        </button>
      </div>
      <div>
        <h3>
          {brand}{' '}
          <span>{model}</span>{' '}
          {year}
        </h3>
        <p>{rentalPrice}</p>
      </div>
      <div>
        <p>
          |{'  '}
          {city}
          {'  '}|{'  '}
          {country}
          {'   '}|{'  '}
          {rentalCompany}
          {'  '}|
        </p>
        <p>
          | {type} |{' '}
          {newMileage} {'km'}{' '}
          |
        </p>
      </div>
      <button
        type="button"
        className={clsx(
          'btn',
          'primaryBtn',
        )}
      >
        Read more
      </button>
    </>
  );
};

export default CarItem;

import css from '../CarsList/CarsList.module.css';

import { useSelector } from 'react-redux';

import { selectError } from '../../redux/cars/selectors';

import CarItem from './CarItem/CarItem';
import NothingFound from '../base/NothingFound/NothingFound';

const CarsList = ({
  array,
}) => {
  const error = useSelector(
    selectError,
  );
  return (
    <ul
      className={css.carList}
    >
      {Array.isArray(array) &&
      array.length !== 0 ? (
        array.map((ar) => (
          <li
            className={
              css.carItem
            }
            key={ar.id}
          >
            <CarItem
              img={ar.img}
              brand={ar.brand}
              model={ar.model}
              year={ar.year}
              rentalPrice={
                ar.rentalPrice
              }
              rentalCompany={
                ar.rentalCompany
              }
              address={
                ar.address
              }
              type={ar.type}
              mileage={
                ar.mileage
              }
            />
          </li>
        ))
      ) : (
        <NothingFound />
      )}
    </ul>
  );
};

export default CarsList;

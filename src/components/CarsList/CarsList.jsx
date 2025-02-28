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
    <ul>
      {Array.isArray(array) &&
      array.length !== 0 ? (
        array.map((ar) => (
          <li
            className={
              css.contact__item
            }
            key={ar.id}
          >
            <CarItem
            // name={ar.name}
            // number={ar.number}
            // id={ar.id}
            />
          </li>
        ))
      ) : (
        <NothingFound
          error={error}
        />
      )}
    </ul>
  );
};

export default CarsList;

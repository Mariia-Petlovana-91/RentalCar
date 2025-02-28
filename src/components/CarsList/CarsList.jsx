import css from '../CarsList/CarsList.module.css';

import CarItem from './CarItem/CarItem';

const CarsList = ({ array }) => {
  return (
    <ul className={css.carList}>
      {Array.isArray(array) &&
        array.length !== 0 &&
        array.map((ar) => (
          <li className={css.carItem} key={ar.id}>
            <CarItem
              img={ar.img}
              brand={ar.brand}
              model={ar.model}
              year={ar.year}
              rentalPrice={ar.rentalPrice}
              rentalCompany={ar.rentalCompany}
              address={ar.address}
              type={ar.type}
              mileage={ar.mileage}
              id={ar.id}
            />
          </li>
        ))}
    </ul>
  );
};

export default CarsList;

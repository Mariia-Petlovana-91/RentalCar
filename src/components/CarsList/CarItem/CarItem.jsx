import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { IoHeartSharp, IoHeartOutline } from 'react-icons/io5';
import clsx from 'clsx';
import css from '../CarItem/CarItem.module.css';

import { toggleFavorite } from '../../../redux/favourite/slice';
import { selectFavoriteItems } from '../../../redux/favourite/selectors';

const CarItem = ({
  id,
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
  const dispatch = useDispatch();
  const favoriteItems = useSelector(selectFavoriteItems);
  const newAddress = address.split(',');
  const city = newAddress[1];
  const country = newAddress[2];
  const newMileage = mileage.toLocaleString('uk-UA');
  const isFavorite = favoriteItems.includes(id);

  return (
    <>
      <div className={css.itemImgContainer}>
        <img src={img} alt={brand} className={css.itemImg} />
        <button
          type="button"
          className={css.itemIconBtn}
          onClick={() => dispatch(toggleFavorite(id))}
        >
          {isFavorite ? (
            <IoHeartSharp
              className={clsx(css.itemIcon, css.itemIconIsFavourite)}
            />
          ) : (
            <IoHeartOutline
              className={clsx(css.itemIcon, css.itemIconNotFavourite)}
            />
          )}
        </button>
      </div>
      <div className={css.itemTitleContainer}>
        <h4 className={css.itemTitlte}>
          {brand} <span className={css.itemModel}>{model}</span>{' '}
          {year}
        </h4>
        <p className={css.itemTitlte}>
          {'$'}
          {rentalPrice}
        </p>
      </div>
      <div className={css.itemAbout}>
        <p className={css.itemAboutText}>
          | {city} | {country} | {rentalCompany} |
        </p>
        <p className={css.itemAboutText}>
          | {type} | {newMileage} {'km'} |
        </p>
      </div>
      <NavLink
        to={`/catalog${id}`}
        className={clsx('btn', 'primaryBtn', css.navBtn)}
      >
        Read more
      </NavLink>
    </>
  );
};

export default CarItem;

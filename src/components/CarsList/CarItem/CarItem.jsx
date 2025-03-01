import React, { useState, useEffect } from 'react';
import { IoHeartSharp, IoHeartOutline } from 'react-icons/io5';
import clsx from 'clsx';
import css from '../CarItem/CarItem.module.css';

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
  const [favoriteItems, setFavoriteItems] = useState(
    JSON.parse(localStorage.getItem('favoriteItems')) || [],
  );

  useEffect(() => {
    if (Array.isArray(favoriteItems)) {
      localStorage.setItem(
        'favoriteItems',
        JSON.stringify(favoriteItems),
      );
    }
  }, [favoriteItems]);

  const isFavorite = favoriteItems.includes(id);

  const toggleItem = (item) => {
    const updatedFavorites = isFavorite
      ? favoriteItems.filter((i) => i !== item)
      : [...favoriteItems, item];

    setFavoriteItems(updatedFavorites);
  };

  const newAddress = address.split(',');
  const city = newAddress[1];
  const country = newAddress[2];
  const newMileage = mileage.toLocaleString('uk-UA');

  return (
    <>
      <div className={css.itemImgContainer}>
        <img src={img} alt={brand} className={css.itemImg} />
        <button
          type="button"
          className={css.itemIconBtn}
          onClick={() => toggleItem(id)}
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
      <button type="button" className={clsx('btn', 'primaryBtn')}>
        Read more
      </button>
    </>
  );
};

export default CarItem;

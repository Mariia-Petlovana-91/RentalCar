import React, {
  useEffect,
  useState,
} from 'react';
import {
  useDispatch,
  useSelector,
} from 'react-redux';

import {
  getCarsThunk,
  getBrandsThunk,
} from '../../redux/cars/operation';

import {
  selectCars,
  selectBrands,
  selectTotalPages,
  selectError,
} from '../../redux/cars/selectors';
import Section from '../../components/base/Section/Section';
import Container from '../../components/base/Container/Container';
import SearchForm from '../../components/CarsList/SearchForm/SearchForm';
import CarsList from '../../components/CarsList/CarsList';
import LoadMore from '../../components/base/LoadMore/LoadMore';
import NothingFound from '../../components/base/NothingFound/NothingFound';

const CarsCatalog = () => {
  const dispatch =
    useDispatch();

  const cars = useSelector(
    selectCars,
  );
  console.log(cars);
  const brands = useSelector(
    selectBrands,
  );

  const totalPages =
    useSelector(
      selectTotalPages,
    );

  const error = useSelector(
    selectError,
  );

  useEffect(() => {
    dispatch(getCarsThunk());
    dispatch(
      getBrandsThunk(),
    );
  }, [dispatch]);

  function onLoadMore() {}

  if (error)
    return <NothingFound />;
  return (
    <Section>
      <Container>
        <SearchForm />
        <CarsList
          array={cars}
        />
      </Container>
      <LoadMore
        onClick={onLoadMore}
      />
    </Section>
  );
};

export default CarsCatalog;

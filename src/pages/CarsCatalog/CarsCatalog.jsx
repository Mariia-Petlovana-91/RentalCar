import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  getCarsThunk,
  getBrandsThunk,
} from '../../redux/cars/operation';

import {
  selectCars,
  selectTotalPages,
  selectError,
  selectIsLoading,
  selectBrands,
} from '../../redux/cars/selectors';

import Section from '../../components/base/Section/Section';
import Container from '../../components/base/Container/Container';
import SearchForm from '../../components/SearchForm/SearchForm';
import CarsList from '../../components/CarsList/CarsList';
import LoadMore from '../../components/LoadMore/LoadMore';
import NotItem from '../../components/NotItem/NotItem';
import NothingFound from '../../components/NothingFound/NothingFound';

const CarsCatalog = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const brands = useSelector(selectBrands);
  const cars = useSelector(selectCars);
  const totalPages = useSelector(selectTotalPages);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(getCarsThunk({ page }));
    dispatch(getBrandsThunk());
  }, [dispatch, page]);

  function onLoadMore() {
    if (page < totalPages && !isLoading) {
      setPage((prevPage) => prevPage + 1);
    }
  }

  return (
    <Section>
      <Container>
        {error ? (
          <NothingFound error={error} />
        ) : (
          <>
            <SearchForm brands={brands} />
            <CarsList array={cars} />
            {page >= totalPages ? (
              <NotItem />
            ) : (
              <LoadMore onClick={onLoadMore} />
            )}
          </>
        )}
      </Container>
    </Section>
  );
};

export default CarsCatalog;

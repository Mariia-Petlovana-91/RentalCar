import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import {
  getCarsThunk,
  getBrandsThunk,
} from '../../redux/cars/operation';

import { setFilters } from '../../redux/filters/slice';

import {
  selectCars,
  selectTotalPages,
  selectError,
  selectIsLoading,
  selectBrands,
} from '../../redux/cars/selectors';

import { clearCars } from '../../redux/cars/slice';

import Section from '../../components/base/Section/Section';
import Container from '../../components/base/Container/Container';
import SearchForm from '../../components/SearchForm/SearchForm';
import CarsList from '../../components/CarsList/CarsList';
import LoadMore from '../../components/LoadMore/LoadMore';
import NotItem from '../../components/NotItem/NotItem';
import NothingFound from '../../components/NothingFound/NothingFound';

const CarsCatalog = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const [page, setPage] = useState(1);

  const brands = useSelector(selectBrands);
  const cars = useSelector(selectCars);
  const totalPages = useSelector(selectTotalPages);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(getBrandsThunk());
    const filters = Object.fromEntries([...searchParams]);
    dispatch(setFilters(filters));
    dispatch(clearCars());
    setPage(1);
    dispatch(getCarsThunk({ ...filters, page: 1 }));
  }, [dispatch, searchParams]);

  function onLoadMore() {
    if (page < totalPages) {
      const nextPage = page + 1;
      setPage(nextPage);
      dispatch(
        getCarsThunk({
          ...Object.fromEntries([...searchParams]),
          page: nextPage,
        }),
      );
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
            {page >= totalPages && !isLoading ? (
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

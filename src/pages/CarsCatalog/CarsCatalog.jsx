import { useEffect, useState, useRef } from 'react';
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
import Loader from '../../components/base/Loader/Loader';
import SearchForm from '../../components/SearchForm/SearchForm';
import CarsList from '../../components/CarsList/CarsList';
import LoadMore from '../../components/LoadMore/LoadMore';
import NotItem from '../../components/NotItem/NotItem';
import NothingFound from '../../components/NothingFound/NothingFound';

const CarsCatalog = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const pageRef = useRef(1); // ✅ Використовуємо `useRef`, щоб уникнути зайвих ререндерів

  const brands = useSelector(selectBrands);
  const cars = useSelector(selectCars);
  const totalPages = useSelector(selectTotalPages);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectError);

  // ✅ Отримуємо бренди тільки один раз при завантаженні сторінки
  useEffect(() => {
    dispatch(getBrandsThunk());
  }, [dispatch]);

  // ✅ Оновлюємо фільтри, але не очищаємо список при кожному ререндері
  useEffect(() => {
    const filters = Object.fromEntries([...searchParams]);
    dispatch(setFilters(filters));

    // Очищуємо список лише при зміні фільтрів
    dispatch(clearCars());
    pageRef.current = 1;

    dispatch(getCarsThunk({ ...filters, page: 1 }));
  }, [dispatch, searchParams]);

  function onLoadMore() {
    if (pageRef.current < totalPages) {
      pageRef.current += 1; // ✅ Оновлюємо сторінку без ререндеру

      dispatch(
        getCarsThunk({
          ...Object.fromEntries([...searchParams]),
          page: pageRef.current,
        }),
      );
    }
  }

  return (
    <Section>
      <Container>
        {isLoading && <Loader />}
        {!isLoading && isError && <NothingFound error={isError} />}
        {!isLoading && !isError && (
          <>
            <SearchForm brands={brands} />
            <CarsList array={cars} />

            {pageRef.current >= totalPages && !isLoading ? (
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

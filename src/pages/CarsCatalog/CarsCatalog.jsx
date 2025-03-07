import { useEffect } from 'react';
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
  selectPage,
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
  const actualPage = useSelector(selectPage);
  const brands = useSelector(selectBrands);
  const cars = useSelector(selectCars);
  const totalPages = useSelector(selectTotalPages);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectError);
  const page = Number(actualPage);

  useEffect(() => {
    dispatch(getCarsThunk({ page: +1 }));
    dispatch(getBrandsThunk());
  }, [dispatch]);

  useEffect(() => {
    const filters = Object.fromEntries([...searchParams]);

    dispatch(setFilters(filters));
    dispatch(clearCars());

    dispatch(getCarsThunk({ ...filters }));
  }, [dispatch, searchParams]);

  const onLoadMore = () => {
    const nextPage = page + 1;
    dispatch(getCarsThunk({ page: nextPage }));
  };

  return (
    <Section>
      <Container>
        {isLoading && <Loader />}
        {isError ? (
          <NothingFound error={isError} />
        ) : (
          <>
            {brands.length > 0 ? (
              <SearchForm brands={brands} />
            ) : null}

            <CarsList array={cars} />
            {page < totalPages ? (
              <LoadMore onClick={onLoadMore} />
            ) : (
              <NotItem />
            )}
          </>
        )}
      </Container>
    </Section>
  );
};

export default CarsCatalog;

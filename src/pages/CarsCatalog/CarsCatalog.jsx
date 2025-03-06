// import { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useSearchParams } from 'react-router-dom';
// import {
//   getCarsThunk,
//   getBrandsThunk,
//   getCarsMoreThunk,
// } from '../../redux/cars/operation';

// import { setFilters } from '../../redux/filters/slice';
// import {
//   selectCars,
//   selectTotalPages,
//   selectError,
//   selectIsLoading,
//   selectBrands,
// } from '../../redux/cars/selectors';

// import { clearCars } from '../../redux/cars/slice';

// import Section from '../../components/base/Section/Section';
// import Container from '../../components/base/Container/Container';
// import Loader from '../../components/base/Loader/Loader';
// import SearchForm from '../../components/SearchForm/SearchForm';
// import CarsList from '../../components/CarsList/CarsList';
// import LoadMore from '../../components/LoadMore/LoadMore';
// import NotItem from '../../components/NotItem/NotItem';
// import NothingFound from '../../components/NothingFound/NothingFound';

// const CarsCatalog = () => {
//   const dispatch = useDispatch();
//   const [searchParams] = useSearchParams();
//   const [page, setPage] = useState(1);

//   const brands = useSelector(selectBrands);
//   const cars = useSelector(selectCars);
//   const totalPages = useSelector(selectTotalPages);
//   const isLoading = useSelector(selectIsLoading);
//   const isError = useSelector(selectError);

//   // Запит брендів один раз при завантаженні сторінки
//   useEffect(() => {
//     dispatch(getBrandsThunk());
//   }, [dispatch]);

//   // Запит при зміні фільтрів (searchParams)
//   useEffect(() => {
//     const filters = Object.fromEntries([...searchParams]);

//     dispatch(setFilters(filters));
//     dispatch(clearCars()); // Очищаємо список авто при зміні фільтрів
//     setPage(1); // Обов'язково скидаємо сторінку!

//     dispatch(getCarsThunk({ ...filters, page: 1 }));
//     console.log('CAR');
//   }, [dispatch, searchParams]);

//   function onLoadMore() {
//     event.preventDefault();
//     const nextPage = page + 1;
//     console.log('Load More запит:', {
//       filters: Object.fromEntries([...searchParams]),
//       page: nextPage,
//     });

//     dispatch(
//       getCarsMoreThunk({
//         ...Object.fromEntries([...searchParams]),
//         page: nextPage,
//       }),
//     );

//     setPage(nextPage);
//   }

//   return (
//     <Section>
//       <Container>
//         {isLoading && <Loader />}
//         {!isLoading && isError && <NothingFound error={isError} />}
//         {!isLoading && !isError && (
//           <>
//             <SearchForm brands={brands} />
//             <CarsList array={cars} />

//             {cars.length === 0 ? (
//               <NotItem />
//             ) : (
//               page < totalPages && <LoadMore onClick={onLoadMore} />
//             )}
//           </>
//         )}
//       </Container>
//     </Section>
//   );
// };

// export default CarsCatalog;

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getCarsThunk,
  getCarsMoreThunk,
} from '../../redux/cars/operation';
import {
  selectCars,
  selectTotalPages,
} from '../../redux/cars/selectors';

const CarsCatalog = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  const cars = useSelector(selectCars);
  const totalPages = useSelector(selectTotalPages);

  useEffect(() => {
    dispatch(getCarsThunk({ page: 1 }));
  }, [dispatch]);

  const onLoadMore = (event) => {
    event.preventDefault(); // Запобігає можливому submit

    const nextPage = page + 1;
    console.log(`Завантажуємо сторінку: ${nextPage}`);

    dispatch(getCarsMoreThunk({ page: nextPage }));
    setPage(nextPage);

    // Запам’ятовуємо позицію перед оновленням
    const scrollPosition = window.scrollY;

    // Відновлюємо прокрутку через 100 мс після рендеру
    setTimeout(() => {
      window.scrollTo(0, scrollPosition);
    }, 100);
  };

  return (
    <div>
      <h1>Cars Catalog</h1>

      <ul>
        {cars.map((car) => (
          <li key={car.id}>
            {car.brand}
            <img src={car.img} alt="gg" />
          </li>
        ))}
      </ul>

      {page < totalPages && (
        <button onClick={onLoadMore} type="button">
          Load More
        </button>
      )}
    </div>
  );
};

export default CarsCatalog;

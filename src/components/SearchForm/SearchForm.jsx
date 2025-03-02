import { useSearchParams } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux';

import css from './SearchForm.module.css';
import clsx from 'clsx';

import { selectPrice } from '../../redux/cars/selectors';
import { getCarsThunk } from '../../redux/cars/operation';
import { setFilters } from '../../redux/filters/slice';
import { clearCars } from '../../redux/cars/slice';

const SearchForm = ({ brands }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();

  const price = useSelector(selectPrice) ?? [];
  const brandsArray = brands ?? [];

  const INITIAL__VALUE = {
    brand: searchParams.get('brand') || '',
    price: searchParams.get('price') || '',
    minMileage: searchParams.get('minMileage') || '',
    maxMileage: searchParams.get('maxMileage') || '',
  };

  function onSubmit(values) {
    const params = new URLSearchParams();

    Object.entries(values).forEach(([key, value]) => {
      if (value) params.set(key, value);
    });

    setSearchParams(params);
    const filters = Object.fromEntries([...params]);
    dispatch(clearCars());
    dispatch(setFilters(filters));
    dispatch(getCarsThunk({ ...filters, page: 1 }));
  }

  return (
    <Formik initialValues={INITIAL__VALUE} onSubmit={onSubmit}>
      {({ handleSubmit }) => (
        <Form className={css.form} onSubmit={handleSubmit}>
          <label className={css.label}>Car brand</label>
          <Field as="select" name="brand" className={css.input}>
            <option
              value=""
              disabled
              hidden
              className={css.optionGeneral}
            >
              Choose a brand
            </option>
            {brandsArray.length > 0 ? (
              brandsArray.map((brand, index) => (
                <option
                  key={index}
                  value={brand}
                  className={css.option}
                >
                  {brand}
                </option>
              ))
            ) : (
              <option value="" disabled className={css.option}>
                No brands available
              </option>
            )}
          </Field>

          <label className={css.label}>Price/1 hour</label>
          <Field as="select" name="price" className={css.input}>
            <option
              value=""
              disabled
              hidden
              className={css.optionGeneral}
            >
              Choose a price
            </option>
            {price.length > 0 ? (
              price.map((p, index) => (
                <option key={index} value={p} className={css.option}>
                  {p}
                </option>
              ))
            ) : (
              <option value="" disabled className={css.option}>
                No price available
              </option>
            )}
          </Field>

          <label className={css.label}>
            <span className={css.descript}>Сar mileage / km</span>
            <Field
              className={css.input}
              type="text"
              name="minMileage"
              placeholder="from"
            />
            <ErrorMessage
              className={css.error}
              name="minMileage"
              component="span"
            />
            <Field
              className={css.input}
              type="text"
              name="maxMileage"
              placeholder="to"
            />
            <ErrorMessage
              className={css.error}
              name="maxMileage"
              component="span"
            />
          </label>

          <button
            className={clsx('btn', 'primaryBtn', css.searchBtn)}
            type="submit"
          >
            Search
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default SearchForm;

import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { BsChevronUp, BsChevronDown } from 'react-icons/bs';

import css from './SearchForm.module.css';
import clsx from 'clsx';

import { selectPrice } from '../../redux/cars/selectors';
import { getCarsThunk } from '../../redux/cars/operation';
import { setFilters } from '../../redux/filters/slice';
import { clearCars } from '../../redux/cars/slice';
import { mileageValidataSchema } from '../../utils/validationShema';

const SearchForm = ({ brands }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const [selectedBrand, setSelectedBrand] = useState(
    searchParams.get('brand') || '',
  );
  const [selectedPrice, setSelectedPrice] = useState(
    searchParams.get('price') || '',
  );
  const [isOpenBrand, setIsOpenBrand] = useState(false);
  const [isOpenPrice, setIsOpenPrice] = useState(false);

  const price = useSelector(selectPrice) ?? [];
  const brandsArray = brands ?? [];

  const INITIAL__VALUE = {
    brand: '',
    price: '',
    minMileage: searchParams.get('minMileage') || '',
    maxMileage: searchParams.get('maxMileage') || '',
  };

  function onSubmit(values) {
    const params = new URLSearchParams();
    if (selectedBrand) params.set('brand', selectedBrand);
    if (selectedPrice) params.set('price', selectedPrice);
    if (values.minMileage)
      params.set('minMileage', values.minMileage);
    if (values.maxMileage)
      params.set('maxMileage', values.maxMileage);

    setSearchParams(params);
    const filters = Object.fromEntries([...params]);
    dispatch(clearCars());
    dispatch(setFilters(filters));
    dispatch(getCarsThunk({ ...filters, page: 1 }));
  }

  return (
    <Formik
      initialValues={INITIAL__VALUE}
      onSubmit={onSubmit}
      validationSchema={mileageValidataSchema}
    >
      {({ handleSubmit }) => (
        <Form className={css.form} onSubmit={handleSubmit}>
          <div className={css.containerGeneral}>
            <label className={css.label}>Car brand</label>
            <div className={css.selectContainer}>
              <div
                className={css.selectWrapper}
                onClick={() => setIsOpenBrand(!isOpenBrand)}
              >
                <div className={clsx(css.input, css.optionCeneral)}>
                  {selectedBrand || 'Choose a brand'}
                </div>
                <span className={css.icon}>
                  {isOpenBrand ? <BsChevronUp /> : <BsChevronDown />}
                </span>
              </div>
              {isOpenBrand && (
                <div
                  className={clsx(css.dropdown, css.dropdownBrand)}
                >
                  {brandsArray.map((brand, index) => (
                    <div
                      key={index}
                      className={css.option}
                      onClick={() => {
                        setSelectedBrand(brand);
                        setIsOpenBrand(false);
                      }}
                    >
                      {brand}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className={css.containerGeneral}>
            <label className={css.label}>Price/1 hour</label>
            <div className={css.selectContainer}>
              <div
                className={css.selectWrapper}
                onClick={() => setIsOpenPrice(!isOpenPrice)}
              >
                <div className={css.input}>
                  {selectedPrice || 'Choose a price'}
                </div>
                <span className={css.icon}>
                  {isOpenPrice ? <BsChevronUp /> : <BsChevronDown />}
                </span>
              </div>
              {isOpenPrice && (
                <div
                  className={clsx(css.dropdown, css.dropdownPrice)}
                >
                  {price.map((p, index) => (
                    <div
                      key={index}
                      className={css.option}
                      onClick={() => {
                        setSelectedPrice(p);
                        setIsOpenPrice(false);
                      }}
                    >
                      {p}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className={css.mileageContainer}>
            <label className={css.label}>Сar mileage / km</label>
            <div className={css.ollInputContainer}>
              <div
                className={clsx(
                  css.inputContainer,
                  css.input,
                  css.inputContainerFrom,
                )}
              >
                <span className={css.inputLabel}>From</span>
                <Field
                  className={css.inputMileage}
                  type="text"
                  name="minMileage"
                />
              </div>
              <ErrorMessage
                className={css.error}
                name="minMileage"
                component="span"
              />

              <div
                className={clsx(
                  css.inputContainer,
                  css.input,
                  css.inputContainerTo,
                )}
              >
                <span className={css.inputLabel}>To</span>
                <Field
                  className={css.inputMileage}
                  type="text"
                  name="maxMileage"
                />
              </div>
              <ErrorMessage
                className={css.error}
                name="maxMileage"
                component="span"
              />
            </div>
          </div>

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

import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

import css from '../CarDetails/CarDetails.module.css';

import { getCarByIdThunk } from '../../redux/cars/operation';
import {
  selectCar,
  selectIsLoading,
} from '../../redux/cars/selectors';

import Section from '../../components/base/Section/Section';
import Container from '../../components/base/Container/Container';
import Details from '../../components/Details/Details';
import NothingFound from '../../components/NothingFound/NothingFound';

const CarDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const car = useSelector(selectCar);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(getCarByIdThunk(id));
  }, [dispatch, id]);

  console.log(car);

  return (
    <Section>
      <Container>
        {!isLoading && car ? <Details {...car} /> : <NothingFound />}
      </Container>
    </Section>
  );
};

export default CarDetails;

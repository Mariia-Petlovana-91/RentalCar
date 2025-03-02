import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import css from '../CarDetails/CarDetails.module.css';

import { getCarByIdThunk } from '../../redux/cars/operation';
import { selectCar } from '../../redux/cars/selectors';

import Section from '../../components/base/Section/Section';
import Container from '../../components/base/Container/Container';
import Details from '../../components/Details/Details';

const CarDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(getCarByIdThunk(id));
  }, [dispatch, id]);
  const car = useSelector(selectCar);

  return (
    <Section>
      <Container>
        <Details object={car} />
      </Container>
    </Section>
  );
};

export default CarDetails;

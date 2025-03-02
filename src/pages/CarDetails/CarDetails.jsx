import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import css from '../CarDetails/CarDetails.module.css';

import { getCarByIdThunk } from '../../redux/cars/operation';
import { selectCar } from '../../redux/cars/selectors';

import Section from '../../components/base/Section/Section';
import Container from '../../components/base/Container/Container';

const CarDetails = () => {
  const { id } = useParams();
  console.log(id);
  const car = useSelector(selectCar);
  console.log(car);
  return (
    <Section>
      <Container></Container>
    </Section>
  );
};

export default CarDetails;

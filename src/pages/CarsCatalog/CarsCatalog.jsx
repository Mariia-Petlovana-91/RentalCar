import css from '../CarsCatalog/CarsCatalog.module.css';

import {
  useEffect,
  useState,
} from 'react';
import {
  useSelector,
  useDispatch,
} from 'react-redux';

import Section from '../../components/base/Section/Section';
import Container from '../../components/base/Container/Container';
import {
  getCarsThunk,
  getBrandsThank,
} from '../../redux/cars/operation';

const CarsCatalog = () => {
  return (
    <Section>
      <Container></Container>
    </Section>
  );
};

export default CarsCatalog;

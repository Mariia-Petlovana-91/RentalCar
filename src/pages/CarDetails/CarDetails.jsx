import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { getCarByIdThunk } from '../../redux/cars/operation';
import {
  selectCar,
  selectIsLoading,
  selectError,
} from '../../redux/cars/selectors';

import Section from '../../components/base/Section/Section';
import Container from '../../components/base/Container/Container';
import Loader from '../../components/base/Loader/Loader';
import Details from '../../components/Details/Details';
import NothingFound from '../../components/NothingFound/NothingFound';

const CarDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const car = useSelector(selectCar);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectError);

  useEffect(() => {
    dispatch(getCarByIdThunk(id));
  }, [dispatch, id]);

  return (
    <Section>
      <Container>
        {isLoading && <Loader />}

        {!isLoading && !isError && car ? (
          <Details {...car} />
        ) : (
          <NothingFound error={isError} />
        )}
      </Container>
    </Section>
  );
};

export default CarDetails;

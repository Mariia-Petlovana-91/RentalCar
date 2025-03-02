import { configureStore } from '@reduxjs/toolkit';

import carsReducer from './cars/slice';
import favoritesReducer from './favourite/slice';
import filtersReducer from './filters/slice';

export const store = configureStore({
  reducer: {
    carsData: carsReducer,
    favoritesData: favoritesReducer,
    filtersData: filtersReducer,
  },
});

export default store;

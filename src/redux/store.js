import { configureStore } from '@reduxjs/toolkit';

import carsReducer from './cars/slice';
import favoritesReducer from './favourite/slice';

export const store = configureStore({
  reducer: {
    carsData: carsReducer,
    favorites: favoritesReducer,
  },
});

export default store;

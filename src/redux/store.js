import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';

const favoritesConfig = {
  key: 'favorites',
  storage,
  whitelist: [
    'favoritesArray',
  ],
};

import favoritesReducer from './favourite/slice';
import carsReducer from './cars/slice';

export const store =
  configureStore({
    reducer: {
      favoritesData:
        persistReducer(
          favoritesConfig,
          favoritesReducer,
        ),
      carsData: carsReducer,
    },
    middleware: (
      getDefaultMiddleware,
    ) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [
            FLUSH,
            REHYDRATE,
            PAUSE,
            PERSIST,
            PURGE,
            REGISTER,
          ],
        },
      }),
  });

export const persistor =
  persistStore(store);

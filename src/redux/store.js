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

const likeConfig = {
  key: 'like',
  storage,
  whitelist: ['isLike'],
};

import authReducer from './auth/slice';
import filtersReducer from './filters/slice';
import contactsReducer from './contacts/slice';

export const store =
  configureStore({
    reducer: {
      carsData:
        persistReducer(
          likeConfig,
          carsReducer,
        ),
      filtersData:
        filtersReducer,
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

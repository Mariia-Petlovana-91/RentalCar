import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  array: [],
};

const favoritesSlice =
  createSlice({
    name: 'favorites',
    initialState:
      INITIAL_STATE,
    reducers: {
      addFavorite(
        state,
        action,
      ) {
        state.items.push(
          action.payload,
        );
      },
      removeFavorite(
        state,
        action,
      ) {
        state.items =
          state.items.filter(
            (id) =>
              id !==
              action.payload,
          );
      },
      setFavorites(
        state,
        action,
      ) {
        state.items =
          action.payload;
      },
    },
  });

export default favoritesSlice.reducer;

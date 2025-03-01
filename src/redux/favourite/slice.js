import { createSlice } from '@reduxjs/toolkit';

const loadFavoritesFromLocalStorage = () => {
  const storedFavorites = localStorage.getItem('favoriteItems');
  return storedFavorites ? JSON.parse(storedFavorites) : [];
};

const saveFavoritesToLocalStorage = (favorites) => {
  localStorage.setItem('favoriteItems', JSON.stringify(favorites));
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    favoriteItems: loadFavoritesFromLocalStorage(),
  },
  reducers: {
    toggleFavorite: (state, action) => {
      const id = action.payload;
      const isAlreadyFavorite = state.favoriteItems.includes(id);

      if (isAlreadyFavorite) {
        state.favoriteItems = state.favoriteItems.filter(
          (item) => item !== id,
        );
      } else {
        state.favoriteItems.push(id);
      }

      saveFavoritesToLocalStorage(state.favoriteItems);
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;


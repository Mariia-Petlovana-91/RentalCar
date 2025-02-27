export const selectFavoriteItems =
  (state) =>
    state.favritesData.array;

export const selectIsFavorite =
  (carId) => (state) =>
    state.favoritesData.array.includes(
      carId,
    );

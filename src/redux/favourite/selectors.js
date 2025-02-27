export const selectFavoriteItems =
  (state) =>
    state.favrites.array;

export const selectIsFavorite =
  (carId) => (state) =>
    state.favorites.array.includes(
      carId,
    );

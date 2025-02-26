export const selectFavoriteItems =
  (state) =>
    state.favrites.array;

export const selectIsFavourite =
  (carId, state) => {
    return state.favrites.array.includes(
      carId,
    );
  };

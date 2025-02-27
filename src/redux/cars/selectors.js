export const selectCars = (
  state,
) => state.cars.cars;
export const selectPage = (
  state,
) => state.cars.page;
export const selectTotalPages =
  (state) =>
    state.cars.totalPages;
export const selectTotalCars =
  (state) =>
    state.cars.totalCars;
export const selectCar = (
  state,
) => state.cars.car;
export const selectBrands = (
  state,
) => state.cars.brands;
export const selectIsLoading =
  (state) =>
    state.cars.isLoading;
export const selectError = (
  state,
) => state.cars.error;

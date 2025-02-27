export const selectCars = (
  state,
) => state.carsData.cars;
export const selectPage = (
  state,
) => state.carsData.page;
export const selectTotalPages =
  (state) =>
    state.carsData.totalPages;
export const selectTotalCars =
  (state) =>
    state.carsData.totalCars;
export const selectCar = (
  state,
) => state.carsData.car;
export const selectBrands = (
  state,
) => state.carsData.brands;
export const selectIsLoading =
  (state) =>
    state.carsData.isLoading;
export const selectError = (
  state,
) => state.carsData.error;

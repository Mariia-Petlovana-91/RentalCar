import { createSlice } from '@reduxjs/toolkit';
import {
  getBrandsThank,
  getCarByIdThank,
  getCarsThunk,
} from './operation';

const INITIAL_STATE = {
  cars: [],
  page: 1,
  totalPages: 1,
  totalCars: 0,
  car: null,
  brands: null,
  isLoading: false,
  error: null,
};

const carsSlice = createSlice(
  {
    name: 'cars',
    initialState:
      INITIAL_STATE,
    extraReducers: (
      builder,
    ) => {
      builder
        .addCase(
          getBrandsThank.pending,
          (state) => {
            state.isLoading = true;
            state.error =
              null;
          },
        )
        .addCase(
          getBrandsThank.fulfilled,
          (state, action) => {
            state.isLoading = false;
            state.brands =
              action.payload;
          },
        )
        .addCase(
          getBrandsThank.rejected,
          (state, action) => {
            state.isLoading = false;
            state.error =
              action.payload;
          },
        )

        .addCase(
          getCarsThunk.pending,
          (state) => {
            state.isLoading = true;
            state.error =
              null;
          },
        )
        .addCase(
          getCarsThunk.fulfilled,
          (state, action) => {
            const {
              cars,
              page,
              totalPages,
              totalCars,
            } =
              action.payload;

            if (page > 1) {
              state.cars = [
                ...state.cars,
                ...cars,
              ];
            } else {
              state.cars =
                cars;
            }

            state.page = page;
            state.totalPages =
              totalPages;
            state.totalCars =
              totalCars;
          },
        )
        .addCase(
          getCarsThunk.rejected,
          (state, action) => {
            state.isLoading = false;
            state.error =
              action.payload;
          },
        )

        .addCase(
          getCarByIdThank.pending,
          (state) => {
            state.isLoading = true;
            state.error =
              null;
          },
        )
        .addCase(
          getCarByIdThank.fulfilled,
          (state, action) => {
            state.isLoading = false;
            state.car =
              action.payload;
          },
        )
        .addCase(
          getCarByIdThank.rejected,
          (state, action) => {
            state.isLoading = false;
            state.error =
              action.payload;
          },
        );
    },
  },
);

export default carsSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import {
  getBrandsThunk,
  getCarByIdThunk,
  getCarsThunk,
} from './operation';

const INITIAL_STATE = {
  cars: null,
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
          getBrandsThunk.pending,
          (state) => {
            state.isLoading = true;
            state.error =
              null;
          },
        )
        .addCase(
          getBrandsThunk.fulfilled,
          (state, action) => {
            state.isLoading = false;
            state.brands =
              action.payload;
          },
        )
        .addCase(
          getBrandsThunk.rejected,
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
          getCarByIdThunk.pending,
          (state) => {
            state.isLoading = true;
            state.error =
              null;
          },
        )
        .addCase(
          getCarByIdThunk.fulfilled,
          (state, action) => {
            state.isLoading = false;
            state.car =
              action.payload;
          },
        )
        .addCase(
          getCarByIdThunk.rejected,
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

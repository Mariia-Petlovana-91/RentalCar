import { createSlice } from '@reduxjs/toolkit';
import {
  getBrandsThunk,
  getCarByIdThunk,
  getCarsThunk,
} from './operation';

const INITIAL_STATE = {
  cars: [],
  totalPages: 0,
  car: null,
  brands: [],
  isLoading: false,
  error: false,
  page: 0,
  price: ['30', '40', '50', '60', '70', '80', '90', '100', '110'],
};

const carsSlice = createSlice({
  name: 'cars',
  initialState: INITIAL_STATE,
  reducers: {
    clearCars: (state) => {
      state.cars = [];
      state.totalPages = 0;
      state.page = 0;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getBrandsThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getBrandsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.brands = action.payload;
      })
      .addCase(getBrandsThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.error;
      })

      .addCase(getCarsThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getCarsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        if (
          action.payload.page !== 1 &&
          state.page !== action.payload.page
        ) {
          state.cars = [...state.cars, ...action.payload.cars];
        } else {
          state.cars = action.payload.cars;
        }

        state.page = action.payload.page;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(getCarsThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(getCarByIdThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getCarByIdThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.car = action.payload;
      })
      .addCase(getCarByIdThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.error;
      });
  },
});

export const { clearCars } = carsSlice.actions;

export default carsSlice.reducer;

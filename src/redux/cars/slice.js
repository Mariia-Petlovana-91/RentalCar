import { createSlice } from '@reduxjs/toolkit';
import {
  getBrandsThunk,
  getCarByIdThunk,
  getCarsThunk,
  getCarsMoreThunk,
} from './operation';

const INITIAL_STATE = {
  cars: [],
  totalPages: 0,
  car: null,
  brands: null,
  isLoading: false,
  error: false,
};

const carsSlice = createSlice({
  name: 'cars',
  initialState: INITIAL_STATE,
  reducers: {
    clearCars: (state) => {
      state.cars = [];
      state.totalPages = 0;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getBrandsThunk.fulfilled, (state, action) => {
        state.brands = action.payload;
      })

      .addCase(getCarsThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getCarsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cars = [...state.cars, ...action.payload.cars];
        state.totalPages = action.payload.totalPages;
      })
      .addCase(getCarsThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(getCarByIdThunk.fulfilled, (state, action) => {
        state.car = action.payload;
      });
  },
});

export const { clearCars } = carsSlice.actions;

export default carsSlice.reducer;

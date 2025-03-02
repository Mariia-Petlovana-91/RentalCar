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
  brands: null,
  isLoading: false,
  error: false,
  price: ['30', '40', '50', '60', '70', '80', '90', '100', '110'],
};

const carsSlice = createSlice({
  name: 'cars',
  initialState: INITIAL_STATE,
  reducers: {
    clearCars: (state) => {
      state.cars = [];
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
        state.error = action.payload;
      })

      .addCase(getCarsThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getCarsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        const { cars, totalPages } = action.payload;

        if (
          state.cars.length === 0 ||
          state.cars[0].id !== cars[0].id
        ) {
          state.cars = [...state.cars, ...cars];
        }

        state.totalPages = totalPages;
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
        state.error = action.payload;
      });
  },
});

export const { clearCars } = carsSlice.actions;

export default carsSlice.reducer;

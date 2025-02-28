import { createAsyncThunk } from '@reduxjs/toolkit';

import toast from 'react-hot-toast';

import { getCars, getCarById, getBrands } from '../../api/api';

export const getCarsThunk = createAsyncThunk(
  'cars/getCars',
  async (params, { rejectWithValue }) => {
    try {
      const data = await getCars(params);
      return data;
    } catch (error) {
      toast.error('Upss not found cars.😔 Try again later.');
      return rejectWithValue(error.message);
    }
  },
);

export const getCarByIdThunk = createAsyncThunk(
  'cars/getCarsById',
  async (id, { rejectWithValue }) => {
    try {
      const data = await getCarById(id);
      return data;
    } catch (error) {
      toast.error('Upss not found car.😔 Try again later.');
      return rejectWithValue(error.message);
    }
  },
);

export const getBrandsThunk = createAsyncThunk(
  'brands/getBrands',
  async (_, { rejectWithValue }) => {
    try {
      const array = await getBrands();
      return array;
    } catch (error) {
      toast.error('Upss not found brands.😔 Try again later.');
      return rejectWithValue(error.message);
    }
  },
);

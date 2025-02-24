import { createSlice } from '@reduxjs/toolkit';

import {
  getBrandsThank,
  getCarByIdThank,
  getCarsThunk,
} from './operation';

INITIAL_STATE = {
  cars: null,
  brands: null,
  isLoad: true,
};

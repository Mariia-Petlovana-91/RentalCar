import * as Yup from 'yup';

const mileagePattern = /^\d{1,3}(,\d{3})*$/;

export const mileageValidataSchema = Yup.object({
  minMileage: Yup.string().matches(
    mileagePattern,
    'Enter mileage in format 5,000',
  ),
  maxMileage: Yup.string().matches(
    mileagePattern,
    'Enter mileage in format 5,000',
  ),
});

export const orderValidationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string()
    .email('Invalid email format.Must be @')
    .required('Email is required'),
});

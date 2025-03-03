import * as Yup from 'yup';

export const orderValidationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string()
    .email('Invalid email format.Must be @')
    .required('Email is required'),
});

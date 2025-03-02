import * as Yup from 'yup';

export const mileageValidataSchema = Yup.object({
  from: Yup.string()
    .min(3, '"from" must contain more than 3 characters.')
    .max(4, '"from" must contain less than 4 characters.'),
  to: Yup.string()
    .min(3, '"to" must contain more than 3 characters.')
    .max(6, '"to" must contain less than 6 characters.'),
});

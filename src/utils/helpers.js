export const formatMileage = (value) => {
  if (!value) return '';
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const parseMileage = (value) => {
  return value.replace(/,/g, '');
};

import axios from 'axios';

const catalogInstance =
  axios.create({
    baseURL:
      'https://car-rental-api.goit.global',
  });

export const getCars = async (
  params = {},
) => {
  const { data } =
    await catalogInstance.get(
      '/cars',
      params,
    );
  return data;
};

export const getCarById =
  async (id) => {
    const { data } =
      await catalogInstance.get(
        `/cars/${id}`,
      );
    return data;
  };

export const getBrands =
  async () => {
    const { data } =
      await catalogInstance.get(
        '/brands',
      );
    return data;
  };

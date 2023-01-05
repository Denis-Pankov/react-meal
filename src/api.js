import { API_URL } from './config';

// воздадим некоторое количество методов, которые будем использовать внутри нашего приложения

const getMealById = async (mealId) => {
  const response = fetch(API_URL + 'lookup.php?i=' + mealId);
  return await (await response).json(); // возвращаем и тоже промис, который где-то будем ловить
};

const getAllCategories = async () => {
  const response = fetch(API_URL + 'categories.php');
  return await (await response).json(); // возвращаем и тоже промис, который где-то будем ловить
};

const getFilteredCategories = async (catName) => {
  const response = fetch(API_URL + 'filter.php?c=' + catName);
  return await (await response).json(); // возвращаем и тоже промис, который где-то будем ловить
};

export { getMealById, getAllCategories, getFilteredCategories };

import { API_URL } from './config';

const getMealById = async (mealId) => {
  const response = fetch(API_URL + 'lookup.php?i=' + mealId);
  return await (await response).json(); 
};

const getAllCategories = async () => {
  const response = fetch(API_URL + 'categories.php');
  return await (await response).json();
};

const getFilteredCategories = async (catName) => {
  const response = fetch(API_URL + 'filter.php?c=' + catName);
  return await (await response).json();
};

export { getMealById, getAllCategories, getFilteredCategories };

import { createAction } from '@reduxjs/toolkit';

const fetchFoods = createAction('FETCH_FOODS');
const deleteFood = createAction('DELETE_FOOD');

export { fetchFoods, deleteFood }
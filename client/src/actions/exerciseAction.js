import { createAction } from '@reduxjs/toolkit';

const fetchExercise = createAction('FETCH_EXERCISE');
const deleteExercise = createAction('DELETE_EXERCISE');

export { fetchExercise, deleteExercise }
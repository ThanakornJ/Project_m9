import { createReducer } from '@reduxjs/toolkit';
import { fetchExercise, deleteExercise } from '../actions/exerciseAction';

export default createReducer([], {
    [fetchExercise]: (state, action) => {
        return action.payload;
    },
    [deleteExercise]: (state, action) => {
        
    }
});
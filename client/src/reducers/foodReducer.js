import { createReducer } from '@reduxjs/toolkit';
import { fetchFoods, deleteFood } from '../actions/foodAction';

export default createReducer([], {
    [fetchFoods]: (state, action) => {
        return action.payload
    },
    [deleteFood]: (state, action) => {
        const index = state.findIndex((food) => {
            return food.foodID === parseInt(action.payload.foodID);
        });

        state.splice(index, 1);
    }
})
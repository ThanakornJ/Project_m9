import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/userReducer';
import foodReducer from './reducers/foodReducer';

export default configureStore({
    reducer: {
        user: userReducer,
        foods: foodReducer
    }
})
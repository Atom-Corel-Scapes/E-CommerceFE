import { configureStore, combineReducers } from '@reduxjs/toolkit';
import USERReducer from '../Redux/SignupSlice.js';
import AdminReducer from '../Redux/AdminSlice.js';

const rootReducer = combineReducers({signup: USERReducer, admin: AdminReducer});

const store = configureStore({
  reducer:rootReducer,
});

export default store;
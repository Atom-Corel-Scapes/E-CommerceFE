import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../Redux/SignupSlice.js';

const store = configureStore({
  reducer: {
    newUser: userReducer,
  },
});

export default store;
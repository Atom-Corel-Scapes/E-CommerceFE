import { configureStore , combineReducers} from '@reduxjs/toolkit';
import userReducer from '../Redux/SignupSlice.js';
import PRODUCTReducer from '../Redux/productslice.js';

const rootReducer = combineReducers({user:userReducer,product:PRODUCTReducer})
const store = configureStore({
  reducer: rootReducer
});

export default store;
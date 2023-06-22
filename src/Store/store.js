
import { configureStore , combineReducers} from '@reduxjs/toolkit';
import userReducer from '../Redux/SignupSlice.js';
import PRODUCTReducer from '../Redux/productslice.js';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import USERReducer from '../Redux/SignupSlice.js';
import AdminReducer from '../Redux/AdminSlice.js';

const rootReducer = combineReducers({signup: USERReducer, admin: AdminReducer});

const rootReducer = combineReducers({user:userReducer,product:PRODUCTReducer})
const store = configureStore({

  reducer:rootReducer,
});

export default store;
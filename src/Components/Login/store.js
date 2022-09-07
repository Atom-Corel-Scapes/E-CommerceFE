import { configureStore,combineReducers } from '@reduxjs/toolkit';

import FINDreducer from '../Login/Slice';


// const fingusercombain =combineReducers({})
const store = configureStore({
  reducer: {
    newUser: FINDreducer,
  },
});

export default store;
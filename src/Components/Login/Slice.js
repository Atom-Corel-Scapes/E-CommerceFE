// import  { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// import userAPI from '../server/Routes/routes'


// // const URL = 'http://localhost:5000/';

// const fetchUserById = createAsyncThunk(
//     'users/fetchByIdLogin',
//     async ( {userName: String ,userPassword: Number}, thunkAPI ) => {
//       const response = await userAPI.fetchById(userId)
//       return response.data
//     }
//   )
  
//   const userSlice = createSlice({
//          name: 'user',
//          initialState: {
//            data: []
//     },  reducer: {},
//     extraReducers: {
//         [getUsers.fulfilled] : (state, action) => {
//             username = userName,
//             passWord = userPassword
//         },
//         [getUsers.pending] : (state) => {
//         },
//         [getUsers.rejected] : (state) => {
//         }
//     }
// });


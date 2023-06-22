import {createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const productlist = createAsyncThunk('list', async () => {
        const response = fetch('http://localhost:5000/display').then((data) => {
          return data.json();
        })
        return response;
    })
    
    
    const productReducer = createSlice({
        name: 'product',
        initialState: {
            menu: [],
            loading: false
        },
        reducer: {},
        extraReducers:{
            [productlist.pending]: (state, action) => {
                state.loading = true;
            },
            [productlist.fulfilled]: (state, action) => {
                state.menu = action.payload.data;
                state.loading = false;
            },
            [productlist.rejected]: (state, action) => {
                console.log('full', state, action);
            }
        }
    });
    const PRODUCTReducer = productReducer.reducer;

export default PRODUCTReducer;
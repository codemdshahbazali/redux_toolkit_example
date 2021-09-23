import { createSlice } from '@reduxjs/toolkit';
import { counterApiData } from './../services/counterService';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    productData: [],
    loading: true,
    errorMessage: null,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  extraReducers: {
    [counterApiData.pending]: (state, action) => {
      state.loading = true;
    },
    [counterApiData.fulfilled]: (state, action) => {
      state.loading = false;
      state.productData = action.payload;
    },
    [counterApiData.rejected]: (state, action) => {
      state.loading = false;
      state.errorMessage = 'Something went wrong';
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;

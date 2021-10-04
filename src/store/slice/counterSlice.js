import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

const initialState = {
  token: null,
  status: 'idle',
  error: null,
  value:0
};


const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
        state.value += 1
      },
      decrement: (state) => {
        state.value -= 1
      },
  },
  extraReducers: {
  },
});

export const {increment,decrement} = counterSlice.actions;

export default counterSlice.reducer;

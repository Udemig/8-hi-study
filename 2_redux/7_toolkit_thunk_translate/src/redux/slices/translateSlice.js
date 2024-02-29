import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  isError: false,
  text: [],
};

const translateSlice = createSlice({
  name: 'translate',
  initialState,
  reducers: {},
  extraReducers: () => {},
});

export default translateSlice.reducer;

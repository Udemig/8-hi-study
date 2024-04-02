import { createSlice } from '@reduxjs/toolkit';
import { getData } from './actions';

const initialState = {
  data: null,
  isLoading: true,
  error: null,
};

const dataSlice = createSlice({
  name: 'dataSlice',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getData.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(getData.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });

    builder.addCase(getData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = false;
      state.data = action.payload;
    });
  },
});

export default dataSlice.reducer;

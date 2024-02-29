import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { getUsers } from '../actions';

// initial State
const initialState = {
  isLoading: false,
  isError: false,
  users: [],
};

const updatedSlice = createSlice({
  name: 'updated',
  initialState,
  // thunk aksiyonun  "pending" / "rejected" / "fulfilled" gibi aksiyonları tetiklendiğinde store'u nasıl etkliyeceğini söyleyebilmek için extraReducers kullanılır.
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(getUsers.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.error;
    });

    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.users = action.payload;
    });
  },
});

export default updatedSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  isError: false,
  users: [],
};

const classicSlice = createSlice({
  name: 'classic',
  initialState,
  reducers: {
    setLoading: (state) => {
      state.isLoading = true;
    },
    setError: (state, action) => {
      state.isLoading = false;
      state.isError = action.payload;
    },
    setUsers: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.users = action.payload;
    },
  },
});

export const { setLoading, setError, setUsers } = classicSlice.actions;
export default classicSlice.reducer;

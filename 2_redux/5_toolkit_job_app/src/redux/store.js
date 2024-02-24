import { configureStore } from '@reduxjs/toolkit';
import jobReducer from './slices/jobSlice';

export default configureStore({ reducer: { jobReducer } });

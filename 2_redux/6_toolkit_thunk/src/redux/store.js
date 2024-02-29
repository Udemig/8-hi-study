import { configureStore } from '@reduxjs/toolkit';
import classicReducer from './slices/classicSlice';
import updatedReducer from './slices/updatedSlice';

export default configureStore({ reducer: { classicReducer, updatedReducer } });

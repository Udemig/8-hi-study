import { configureStore } from '@reduxjs/toolkit';
import language from './slices/languageSlice';
import translate from './slices/translateSlice';

export default configureStore({ reducer: { language, translate } });

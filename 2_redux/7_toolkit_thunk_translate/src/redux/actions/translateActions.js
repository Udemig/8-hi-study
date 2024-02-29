import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { languageOptions } from '../../constants';

// asenkron thunk aksiyonları
export const getLanguages = createAsyncThunk(
  'language/getLanguages',
  async () => {
    // api'dan dil verilerini al
    const res = await axios.request(languageOptions);

    // aksiyonun payload'ını belirle
    return res.data.data.languages;
  }
);

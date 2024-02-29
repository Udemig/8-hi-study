// asenkron thunk aksiyonu
// bizden iki parametre ister
// 1) aksiyonun tipi

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// 2) aksiyonun payload'ını return eden fonksiyon
export const getUsers = createAsyncThunk('getUsers', async () => {
  // asenkron işlem
  const res = await axios.get('https://jsonplaceholder.typicode.com/users');

  // slice'a aksiyonun payload'ı olarak gidicek olan veriyi return ederiz
  return res.data;
});

// Async thunk aksiyonları yaptığı isteğin durumuna göre otomatik olarak store'a 3 farklı aksiyon dispatch edebilir.

// 1) pending: isteği yaptığı anda bu aksiyonu tetikler
// isteğin başladğını belirtir

// 2) fulfilled: istek başarılı olursa bu aksiyonu tetikler
// payload'ına api dan gelen veriyi ekler

// 3) rejected: istekte hata oluşursa bu aksiyonu tetikler
// isteğin error bölümüne hata detaylarını ekler

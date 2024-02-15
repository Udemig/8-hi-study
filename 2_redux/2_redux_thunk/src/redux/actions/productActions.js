// Aksiyon Oluşturan Fonksiyonlar

import axios from 'axios';

// Obje oluşturan FOnksiyon
export const setLoading = () => {
  return {
    type: 'SET_LOADING',
  };
};

export const setProducts = (payload) => {
  return {
    type: 'SET_PRODUCTS',
    payload,
  };
};

export const setError = (payload) => {
  return {
    type: 'SET_ERROR',
    payload,
  };
};

//! Redux Thunk Devreye Girince
// Aksiyon Oluşturan fonksiyonlar
// redux thunk işin içerisne girince bu a.o.f return satırında
// yeni bir fonskyion döndürme yeteneğine sahip olur.
// Bu sayede bu return edilen fonksiyonların içerisinde api istekleri
// yapabiliriz.

export const getData = () => {
  return (dispatch) => {
    dispatch(setLoading());

    // artık aksiyon içersinde api istekleri atabilir
    // daha sonrasında store'a haber verebiliriz
    axios
      .get('http://localhost:3040/products')
      .then((res) => dispatch(setProducts(res.data)))
      .catch((err) => dispatch(setError(err.message)));
  };
};

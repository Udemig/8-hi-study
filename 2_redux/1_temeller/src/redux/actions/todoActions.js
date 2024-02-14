//! Aksiyon Objesi Oluşturan Fonksiyon
// payload değeri dinamik olcauğından
// payload'ı paramaetree oalrak aldık
// bu fonksiyon sonuç oalrak aldığı payload'a
// göre bir aksiyon döndürecek

import { ActionTypes } from '../actionTypes/actionTypes';

export const addTodo = (payload) => ({
  type: ActionTypes.ADD,
  payload,
});

export const deleteTodo = (payload) => ({
  type: ActionTypes.DELETE,
  payload,
});

export const updateTodo = (payload) => ({
  type: ActionTypes.UPDATE,
  payload,
});

export const setTodos = (payload) => ({
  type: ActionTypes.SET,
  payload,
});

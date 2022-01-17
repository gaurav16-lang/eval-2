import {
  ADD_LOGIN_ERROR,
  ADD_LOGIN_LOADING,
  ADD_LOGIN_SUCCESS,
} from './actionType'

export const addLoginloading = () => ({
  type: ADD_LOGIN_LOADING,
})

export const addLoginSuccess = (data) => ({
  type: ADD_LOGIN_SUCCESS,
  payload: data,
})

export const addLoginError = (data) => ({
  type: ADD_LOGIN_ERROR,
  payload: data,
})

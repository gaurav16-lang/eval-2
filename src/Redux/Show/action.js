import {
  GET_SHOW_LOADING,
  GET_SHOW_SUCCESS,
  GET_SHOW_ERROR,
} from './actionType'

export const getshowLoading = () => ({ type: GET_SHOW_LOADING })
export const getShowSuccess = (data) => ({
  type: GET_SHOW_SUCCESS,
  payload: data,
})

export const getShowError = (data) => ({ type: GET_SHOW_ERROR, payload: data })

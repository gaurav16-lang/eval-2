import {
  ADD_LOGIN_LOADING,
  ADD_LOGIN_SUCCESS,
  ADD_LOGIN_ERROR,
} from './actionType'

const initState = {
  auth: {
    token: '',
    loading: false,
    error: false,
  },
}

const saveToken = (token) => {
  localStorage.setItem('token', JSON.stringify(token))
}
export const AuthReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ADD_LOGIN_LOADING:
      return {
        ...state,
        auth: {
          ...state.auth,
          loading: true,
        },
      }
    case ADD_LOGIN_SUCCESS:
      saveToken(payload)
      return {
        ...state,
        auth: {
          ...state.auth,
          loading: false,
          token: payload,
        },
      }
    case ADD_LOGIN_ERROR:
      return {
        ...state,
        auth: {
          ...state.auth,
          error: true,
        },
      }
    default:
      return { ...state }
  }
}

import {
  GET_SHOW_LOADING,
  GET_SHOW_SUCCESS,
  GET_SHOW_ERROR,
} from './actionType'

const initState = {
  shows: {
    loading: false,
    data: [],
    error: false,
  },
}

export const ShowReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_SHOW_LOADING:
      return {
        ...state,
        shows: {
          ...state.shows,
          loading: true,
        },
      }
    case GET_SHOW_SUCCESS:
      return {
        ...state,
        shows: {
          ...state.shows,
          data: payload,
          loading: true,
        },
      }
    case GET_SHOW_ERROR:
      return {
        ...state,
        shows: {
          ...state.shows,
          error: true,
        },
      }
    default:
      return { ...state }
  }
}

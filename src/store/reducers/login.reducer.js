import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  CHECK_AUTH_REQUEST,
  CHECK_AUTH_SUCCESS,
  CHECK_AUTH_FAILURE,
} from '../types';

const defaultState = {
  user: null,
  isAuthenticated: false,
  loginLoading: false,
  loginError: null,
  checkAuthLoading: false,
  checkAuthError: false,
};

// Fixed state = defaultState
export default (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loginLoading: false,
      };
    case LOGIN_SUCCESS:
      return {
        // Fixed ...state
        ...state,
        user: action.payload.user,
        isAuthenticated: true,
        loginLoading: false,
        checkAuthError: false,
        loginError: null,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loginLoading: false,
        isAuthenticated: false,
        loginError: action.payload,
      };
    case CHECK_AUTH_REQUEST:
      return {
        ...state,
        checkAuthLoading: true,
      };
    case CHECK_AUTH_SUCCESS:
      return {
        ...state,
        checkAuthLoading: false,
        isAuthenticated: true,
        user: action.payload.user,
        checkAuthError: false,
        loginError: null,
      };
    case CHECK_AUTH_FAILURE:
      return {
        ...state,
        checkAuthLoading: false,
        isAuthenticated: false,
        checkAuthError: true,
      };
    default:
      return state;
  }
}

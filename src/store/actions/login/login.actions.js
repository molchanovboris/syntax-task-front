import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  CHECK_AUTH_REQUEST,
  CHECK_AUTH_SUCCESS,
  CHECK_AUTH_FAILURE,
} from '../../types';

//Fixed Action types были указаны с ''
export const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

export const loginSuccess = (data) => ({
  type: LOGIN_SUCCESS,
  payload: data,
});

export const loginFailure = (err) => ({
  type: LOGIN_FAILURE,
  payload: err,
});
export const checkAuthRequest = () => ({
  type: CHECK_AUTH_REQUEST,
});

export const checkAuthSuccess = (data) => ({
  type: CHECK_AUTH_SUCCESS,
  payload: data,
});

export const checkAuthFailure = (err) => ({
  type: CHECK_AUTH_FAILURE,
  payload: err,
});

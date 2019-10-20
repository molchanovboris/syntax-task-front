/* eslint-disable import/prefer-default-export */
import history from '../../../history';
import axiosInstance from '../../../api';
import * as actions from './login.actions';

export const doLogin = (credentials) => async dispatch => {
  dispatch(actions.loginRequest());
  try {
    const request = await axiosInstance.post('/auth/login', credentials);
    dispatch(actions.loginSuccess(request.data));
    localStorage.setItem('token', request.data.token);
    history.push('/');
    // return request;
  } catch (err) {
    dispatch(actions.loginFailure(err));
  }
};

export const checkAuth = () => async dispatch => {
  dispatch(actions.checkAuthRequest());
  try {
    const request = await axiosInstance.get('/auth/checkAuth');
    dispatch(actions.checkAuthSuccess(request.data));
    // history.push('/');
    // return request;
  } catch (err) {
    dispatch(actions.checkAuthFailure(err));
  }
};

import {
  GET_TASKS_REQUEST,
  GET_TASKS_SUCCESS,
  GET_TASKS_FAILURE,
  ADD_TASK_REQUEST,
  ADD_TASK_SUCCESS,
  ADD_TASK_FAILURE,
  UPDATE_TASK_REQUEST,
  UPDATE_TASK_SUCCESS,
  UPDATE_TASK_FAILURE,
  DELETE_TASK_REQUEST,
  DELETE_TASK_SUCCESS,
  DELETE_TASK_FAILURE,
} from '../../types';

// Fixed GET_TASKS_REQUEST и все остальные т.к. раньше было "GET_TASKS_REQUEST"
export const getTasksRequest = () => ({
  type: GET_TASKS_REQUEST,
});

export const getTasksSuccess = (data) => ({
  type: GET_TASKS_SUCCESS,
  payload: data,
});

export const getTasksFailure = (err) => ({
  type: GET_TASKS_FAILURE,
  payload: err,
});

export const addTaskRequest = () => ({
  type: ADD_TASK_REQUEST,
});

export const addTaskSuccess = (data) => ({
  type: ADD_TASK_SUCCESS,
  payload: data,
});

export const addTaskFailure = (err) => ({
  type: ADD_TASK_FAILURE,
  payload: err,
});

export const updateTaskRequest = () => ({
  type: UPDATE_TASK_REQUEST,
});

export const updateTaskSuccess = (data) => ({
  type: UPDATE_TASK_SUCCESS,
  payload: data,
});

export const updateTaskFailure = (err) => ({
  type: UPDATE_TASK_FAILURE,
  payload: err,
});

export const deleteTaskRequest = () => ({
  type: DELETE_TASK_REQUEST,
});

export const deleteTaskSuccess = (data) => ({
  type: DELETE_TASK_SUCCESS,
  payload: data,
});

export const deleteTaskFailure = (err) => ({
  type: DELETE_TASK_FAILURE,
  payload: err,
});

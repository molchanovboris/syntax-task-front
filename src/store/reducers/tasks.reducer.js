
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
} from '../types';

const defaultState = {
  tasksList: [],
  loading: false,
  taskError: null,
};

export default function taskReducer(state = defaultState, action) {
  switch (action.type) {
    case GET_TASKS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_TASKS_SUCCESS:
      return {
        ...state,
        tasksList: [...action.payload.result],
        loading: false,

      };
    case GET_TASKS_FAILURE:
      return {
        ...state,
        loading: false,
        taskError: true,
      };

    case ADD_TASK_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ADD_TASK_SUCCESS:
      return {
        ...state,
        loading: false,
        tasksList: [...state.tasksList, action.payload.result],
      };
    case ADD_TASK_FAILURE:
      return {
        ...state,
        loading: false,
        taskError: true,
      };

    case UPDATE_TASK_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_TASK_SUCCESS:
      return {
        ...state,
        loading: false,
        tasksList: (() => {
          const findIndex = state.tasksList.findIndex((task) => task._id === action.payload._id);
          state.tasksList[findIndex].active = !state.tasksList[findIndex].active;
          return [...state.tasksList];
        })(),
      };
    case UPDATE_TASK_FAILURE:
      return {
        ...state,
        loading: false,
        taskError: true,
      };

    case DELETE_TASK_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_TASK_SUCCESS:
      return {
        ...state,
        loading: false,
        tasksList: (() => {
          const findIndex = state.tasksList.findIndex((task) => task._id === action.payload);
          state.tasksList.splice(findIndex, 1);
          return state.tasksList;
        })(),
      };
    case DELETE_TASK_FAILURE:
      return {
        ...state,
        loading: false,
        taskError: true,
      };
    default:
      return state;
  }
}

//Fixed добавил * as
import * as actions from './tasks.action';
import axiosInstance from '../../../api';

export const getTasks = () => async (dispatch) => {
  dispatch(actions.getTasksRequest());
  try {
    const request = await axiosInstance.get('/api/tasks');
    dispatch(actions.getTasksSuccess(request.data));
  } catch (err) {
    dispatch(actions.getTasksFailure(err));
  }
};

//Fixed добавил dispatch
export const addTask = () => async (dispatch) => {
  dispatch(actions.addTaskRequest());
  try {
    const response = await axiosInstance.post('/api/tasks');
    dispatch(actions.addTaskSuccess(response.data));
  } catch (err) {
    dispatch(actions.addTaskFailure(err));
  }
};

export const updateTask = (id, data) => async (dispatch) => {
  dispatch(actions.updateTaskRequest());
  try {
    await axiosInstance.put(`/api/tasks/${id}`, data);
    dispatch(actions.updateTaskSuccess({ _id: id }));
  } catch (err) {
    dispatch(actions.updateTaskFailure(err));
  }
};

export const deleteTask = (id) => async (dispatch) => {
  dispatch(actions.deleteTaskRequest());
  try {
    await axiosInstance.delete(`/api/tasks/${id}`);
    dispatch(actions.deleteTaskSuccess(id));
  } catch (err) {
    dispatch(actions.deleteTaskFailure(err));
  }
};

import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import loginReducer from './login.reducer';
import tasksReducer from './tasks.reducer';

// Fixed const todoApp 
export default combineReducers({
  login: loginReducer,
  tasks: tasksReducer,
  form: formReducer
});


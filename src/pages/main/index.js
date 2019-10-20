import React from 'react';
// Fixed добавил bindActionCreators
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Row, Col, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { checkAuth } from '../../store/actions/login/login.thunk';

import {
  addTask, getTasks, updateTask, deleteTask,
} from '../../store/actions/tasks/tasks.thunk';

import Header from '../../components/header/Header';
import SidePanel from '../../components/SidePanel';
import TasksList from './components/TasksList';
import NewTaskForm from './components/NewTaskForm';
import Loading from '../../components/Loading';
import { StyledRow } from './components/Task';


const StyledBody = styled(Row)`
  height: calc(100% - 100px);
`;
const StyledContent = styled(Col)`
  height: 100%;
  overflow: auto;
`;

const StyledSidePanel = styled(Col)`
  box-shadow: 4px 0px 10px rgba(0,0,0,0.2);
  height: calc(100% + 100px);
  top: 0;
  margin-top: -100px;
  padding-top: 100px;
  padding-right: 0;
  padding-left: 0;
`;
//Fixe ; после color
const FontIcon = styled(FontAwesomeIcon)`
  color: #8a8a8a;
  margin: 2px;
  font-size:25px;
`;

export class Protected extends React.Component {
  state = {
    showNewTaskForm: true,
  }

  async componentDidMount() {
    await this.props.checkAuth();
    await this.props.getTasks();
  }

  submit = (values) => {
    this.forceUpdate();
    this.props.addTask(values);
    this.hideNewTaskForm();
    this.props.getTasks();
  }


  showNewTaskForm = () => {
    this.setState(({ showNewTaskForm }) => ({
      showNewTaskForm: !showNewTaskForm,
    }));
  }

  hideNewTaskForm = () => {
    this.setState((state) => ({
      showNewTaskForm: false,
    }));
  }

  changeTaskStatus = (taskId, data) => {
    // this.props.updateTask(taskId, data);
  }

  removeTask = (taskId) => {
    // this.props.deleteTask(taskId);
  }

  render() {
    const {
      isAuthenticated, checkAuthError, user, tasks, loading, checkAuthLoading,
    } = this.props;
    //Fixed исправил ошибки в isAuthenticated, checkAuthError, checkAuthLoading
    if (!isAuthenticated && !checkAuthError && !checkAuthLoading) return null;
    if (!isAuthenticated && !checkAuthError && checkAuthLoading) return <Loading />;
    if (checkAuthError && !isAuthenticated) return <Redirect to="/login" />;
    if (!checkAuthError && isAuthenticated) {
      return (
        <>
          {loading && <Loading />}
          <Header userName={user.userName} />
          <StyledBody>
            <StyledSidePanel xs="3">
              <SidePanel userName={user.userName} />
            </StyledSidePanel>
            <StyledContent xs="9">

              <TasksList
                tasks={tasks}
                // Fixed изменил на this.changeTaskStatus() и this.removeTask()
                changeTaskStatus={this.changeTaskStatus()}
                removeTask={this.removeTask()}
              />
              <StyledRow>
                {!this.state.showNewTaskForm
                  && (
                    <Button color="link" onClick={this.showNewTaskForm.bind(user)}>
                      <FontIcon icon={faPlus} />
                    </Button>
                  )}
                {this.state.showNewTaskForm
                  && <NewTaskForm onSubmit={this.submit} />}

              </StyledRow>
            </StyledContent>
          </StyledBody>
        </>
      );
    }
  }
}

Protected.propTypes = {
  checkAuth: PropTypes.func.isRequired,
  getTasks: PropTypes.func.isRequired,
  addTask: PropTypes.func.isRequired,
  updateTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  checkAuthError: PropTypes.bool.isRequired,
  user: PropTypes.instanceOf(Object),
  tasks: PropTypes.instanceOf(Array).isRequired,
  loading: PropTypes.bool.isRequired,
  checkAuthLoading: PropTypes.bool.isRequired,
  userName: PropTypes.string,

};

Protected.defaultProps = {
  checkAuthError: PropTypes.isNotNull,
  user: PropTypes.isNotNull,
  userName: PropTypes.isNotNull,

};

const mapStateToProps = (state) => ({
  isAuthenticated: state.login.isAuthenticated,
  checkAuthError: state.login.checkAuthError,
  checkAuthLoading: state.login.checkAuthLoading,
  user: state.login.user,
  tasks: state.tasks.tasksList,
  loading: state.tasks.loading,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  checkAuth,
  addTask,
  getTasks,
  updateTask,
  deleteTask,
}, dispatch);


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Protected);

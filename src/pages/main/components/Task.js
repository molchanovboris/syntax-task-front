import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  Row,
  Col,
  Input,
  Button,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faCommentDots } from '@fortawesome/free-solid-svg-icons';
import ProgressBar from './ProgressBar';
import Priority from './Priority';

const CommentsAmount = styled.div`
  background: #007bff;
  color: white;
  width: 10px;
  height: 10px;
  border-radius: 100%;
  font-size: 7px;
  text-align: center;
  text-transform: uppercase;
  position:absolute;
  left: 25px;
  bottom: 15px;
  z-index:1;
`;


const StyledName = styled.span`
  text-decoration: ${(props) => (props.active ? 'none' : 'line-through')};
`;

const StyledInput = styled(Input)`
  margin-top: -8px;
  margin-left: 0;
`;

export const StyledRow = styled(Row)`
  height: 70px;
  padding: 0 5%;
  border-bottom: 1px solid #ccc;
  align-items: center;
`;

const Task = ({ task, changeTaskStatus, removeTask }) => {
  const changeTask = () => {
    changeTaskStatus(task._id, {
      active: !task.active,
    });
  };

  const remove = () => {
    removeTask(task._id);
  };

  return (
    <StyledRow>
      <Col xs="1">
        <StyledInput type="checkbox" checked={!task.active} onChange={changeTask} />
      </Col>
      <Col xs="3">
        <StyledName active={task.active}>{task.name}</StyledName>
      </Col>
      <Col xs="3">
        <ProgressBar
          progress={task.progress}
          priority={task.priority}
          active={task.active}
        />
      </Col>
      <Col xs="3">
        <Priority
          priority={task.priority}
          active={task.active}
        />
      </Col>
      <Col xs="1">
        <FontAwesomeIcon icon={faCommentDots} />
        <CommentsAmount>{task.commentsAmount}</CommentsAmount>

      </Col>
      <Col xs="1">
        <Button color="link" onClick={remove}>
          <FontAwesomeIcon icon={faTrashAlt} color="#a8a8a8" />
        </Button>
      </Col>

    </StyledRow>
  );
};

Task.propTypes = {
  task: PropTypes.shape({
    active: PropTypes.bool,
    commentsAmount: PropTypes.number,
    createdAt: PropTypes.string,
    name: PropTypes.string,
    priority: PropTypes.string,
    progress: PropTypes.number,
    userId: PropTypes.string,
    __v: PropTypes.number,
    _id: PropTypes.string,
  }).isRequired,

  changeTaskStatus: PropTypes.func.isRequired,
  removeTask: PropTypes.func.isRequired,

};

// Fixed добавил export default Task;
export default Task;


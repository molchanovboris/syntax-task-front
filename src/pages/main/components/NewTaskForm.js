import React from 'react';
import styled from 'styled-components';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import {
  Form, Col, Row,
} from 'reactstrap';
import ButtonOutline from '../../../components/ButtonOutline';
import MyInput from '../../../components/MyInput';

const StyledForm = styled(Form)`
  width: 100%;
  input {
    width: 100%
  }
`;

const renderInputField = ({
  input,
  label,
  type,
  meta: { touched, error },
}) => (
    <div>
      <MyInput {...input} placeholder={label} type={type} />
      {
        touched
        || ((error && <span className="my-error-messages">{error}</span>))
      }
    </div>
  );

const renderSelectField = ({
  input,
  label,
  type,
  meta: { touched, error },
}) => (
    <div>
      <MyInput {...input} placeholder={label} type={type}>
        <option>Select</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </MyInput>
      {
        touched
        && ((error && <span className="my-error-messages">{error}</span>))
      }
    </div>
  );


const TaskForm = (props) => {
  const { handleSubmit } = props;
  return (
    <StyledForm onSubmit={handleSubmit()}>
      <Row>
        <Col xs="6">
          <Field name="name" label="New task" component={renderInputField} type="text" />
        </Col>
        <Col xs="3">
          <Field name="priority" label="Select Priority" component={renderSelectField} type="select" />
        </Col>
        <Col xs="3">
          <ButtonOutline outline color="primary" type="submit">Тыкни меня</ButtonOutline>
        </Col>
      </Row>

    </StyledForm>
  );
};

renderInputField.propTypes = {

  input: PropTypes.instanceOf(Object).isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  meta: PropTypes.instanceOf(Object).isRequired,
};

renderSelectField.propTypes = {

  input: PropTypes.instanceOf(Object).isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  meta: PropTypes.instanceOf(Object).isRequired,
};

TaskForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};


const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = 'You must enter a new task name!';
  }
  if (!values.priority) {
    errors.priority = 'You must select a priority!';
  }

  return errors;
};


export default reduxForm({
  form: 'taskForm',
  validate,
})(TaskForm);

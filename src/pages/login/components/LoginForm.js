import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { Form } from 'reactstrap';
import ButtonOutline from '../../../components/ButtonOutline';
import MyInput from '../../../components/MyInput';

const StyledForm = styled(Form)`
  input {
    margin-bottom: 8px;
  }
`;

// Fixed ";" после margin-top в StyledError
const StyledError = styled.span.attrs({
  className: 'my-error-messages',
})`
  margin-top: -24px;
`;

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error },
}) => (
    <div>
      {
        touched
        && ((error && <StyledError>{error}</StyledError>))
      }
      <MyInput {...input} placeholder={label} type={type} />
    </div>

  );

const LoginForm = (props) => {
  const { handleSubmit } = props;
  return (
    <StyledForm onSubmit={handleSubmit}>

      <Field name="userName" label="Username" component={renderField} type="text" />

      <ButtonOutline outline color="primary" type="submit">Submit</ButtonOutline>
    </StyledForm>
  );
};

renderField.propTypes = {
  input: PropTypes.instanceOf(Object).isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  meta: PropTypes.instanceOf(Object).isRequired,

};

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

const validate = (values) => {
  const errors = {};
  if (!values.userName) {
    errors.userName = 'You must enter a Name!';
  }

  return errors;
};

export default reduxForm({
  form: 'loginForm_кек_форм',
  validate,
})(LoginForm);

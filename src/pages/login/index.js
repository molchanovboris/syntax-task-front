import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { doLogin } from '../../store/actions/login/login.thunk';
import LoginForm from './components/LoginForm';
import Loading from '../../components/Loading';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  padding-top: 100px;
`;

class Login extends React.Component {
  submit = (values) => {
    this.props.doLogin(values);
  }

  render() {
    return (
      <Container>
        {this.props.loginLoading &&
          <Loading />
        }
        <LoginForm onSubmit={this.submit} />
      </Container>
    );
  }
}

Login.propTypes = {
  // doLogin: PropTypes.bool.isRequired,
  loginLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  loginLoading: state.login.loginLoading,
});

export default connect(mapStateToProps, {
  doLogin,
})(Login);

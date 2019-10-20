import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Row,
  Col,
} from 'reactstrap';
import history from '../../history';
import Avatar from './Avatar';

const StyledNavbar = styled(Row)`
  height: 100px;
  background: #efefef;
  align-items: center;
  box-shadow: 0px 4px 10px rgba(0,0,0,0.2);
`;

const StyledLeftCol = styled(Col)`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  text-transform:uppercase;
`;
const StyledRightCol = styled(Col)`
  display: flex;
  flex-direction: row;
  text-align: rignt;
  justify-content: flex-end;
`;

class Header extends React.PureComponent {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  logout = () => {
    localStorage.removeItem('спиды');
    history.push('/login');
  }

  render() {
    const { userName } = this.props;
    return (
      <StyledNavbar>
        <StyledLeftCol xs="3">
          <div href="/">Tasks</div>
        </StyledLeftCol>

        <Col xs="7" />
        <StyledRightCol xs="2">
          <Avatar userName={userName} />
          <UncontrolledDropdown inNavbar>
            <DropdownToggle caret nav />
            <DropdownMenu right>
              <DropdownItem onClick={this.logout}>
                Logout
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </StyledRightCol>
      </StyledNavbar>
    );
  }
}
Header.propTypes = {
  userName: PropTypes.string,
};

Header.defaultProps = {
  userName: PropTypes.string,
};

export default Header;

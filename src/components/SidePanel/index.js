import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import colors from '../../config/colors';

const Wrapper = styled.div`
  width: 100%;
`;

const Username = styled.div`
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
`;

const Highlighted = styled(Username)`
  background: ${colors.sidebar};
  color: white;
`;

const FontIcon = styled(FontAwesomeIcon)`
  color: ${colors.grey};
  font-size: 25px;
`;


const SidePanel = ({ userName }) => (
  <Wrapper>

    <Username>
      <FontIcon icon={faUser} />
      {userName}
    </Username>
    <Highlighted>Tasks list</Highlighted>

  </Wrapper>
);

SidePanel.propTypes = {
  userName: PropTypes.string,

};


SidePanel.defaultProps = {
  userName: PropTypes.string,

};

export default SidePanel;

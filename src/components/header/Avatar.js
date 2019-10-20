import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { randomBackground } from '../../utils/index';
//Fixed добавил createSymbol
import { createSymbol } from '../../utils'
//Fixed ; после background: ${(props) => props.background}
const AvatarWrapper = styled.div`
  background: ${(props) => props.background};
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  font-size: 25px;
  line-height: 40px;
  text-align: center;
  text-transform: uppercase;
`;

const Avatar = ({ userName }) => (
  <AvatarWrapper background={randomBackground()}>
    {createSymbol(userName)}
  </AvatarWrapper>
);


Avatar.propTypes = {
  userName: PropTypes.string,
};

Avatar.defaultProps = {
  userName: PropTypes.string,
};


export default Avatar;

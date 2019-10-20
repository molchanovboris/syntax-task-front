import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import colors from '../../config/colors';

const StyledButton = styled.button`
  width: 200px;
  color: ${colors.sidebar};
  border-color: ${colors.sidebar};
  &:hover {
    background-color: ${colors.sidebar} !important;
    border-color: ${colors.sidebar} !important;
    color: white;
}
`;

const ButtonOutline = ({ ...rest }) => (
  <StyledButton {...rest}></StyledButton>
);

ButtonOutline.propTypes = {
  children: PropTypes.string,

};
ButtonOutline.defaultProps = {
  children: PropTypes.isNotNull,

};


export default ButtonOutline;

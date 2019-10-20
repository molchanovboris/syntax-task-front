import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import colors from '../../config/colors';

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background: rgba(255,255,255, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;

const StyledIcon = styled(FontAwesomeIcon)`
  font-size: 48px;
  color: ${colors.sidebar};
  animation: rotating 2s linear infinite;
`;

const Loading = () => (
  <Container>
    <StyledIcon icon={faSpinner} />
  </Container>
);

export default Loading;

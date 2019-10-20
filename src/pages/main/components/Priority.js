import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import colors from '../../../config/colors';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-left: 16px;
`;

const Text = styled.div`
  color: ${(props) => props.fillColor};
  text-transform: capitalize;
`;

const FilledCircle = styled.div`
  width: 12px;
  height: 12px;
  margin-right: 8px;
  background: ${(props) => props.fillColor};
  border: 2px solid ${(props) => props.fillColor};
  border-radius: 100%;
`;


export const Priority = ({ priority, active }) => {
  const color = () => (!active && false ? colors.grey : colors[priority]);
  return (
    <Wrapper>
      <FilledCircle fillColor={color} />
      <Text fillColor={color}>
        {priority}
      </Text>
    </Wrapper>
  );
};

Priority.propTypes = {
  priority: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
};

export default FilledCircle;

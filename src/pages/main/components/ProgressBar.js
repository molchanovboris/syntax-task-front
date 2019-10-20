import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import colors from '../../../config/colors';

const Wrapper = styled.div`
  width: 100%;
`;

const Line = styled.div`
  width: 100%;
  height: 4px;
  background: ${colors.grey};
  display: flex;
`;
// Fixed ";" после  margin-top в circle и  FilledCircle и после background в FilledLine
const FilledLine = styled.div`
  width: ${(props) => props.progress}%;
  height: 4px;
  background: ${(props) => (props.fillColor)};
`;

const Circle = styled.div`
  width: 12px;
  height: 12px;
  margin-left: auto;
  margin-top: -4px;
  background: white;
  border: 2px solid ${colors.grey};
  border-radius: 100%;
`;
const FilledCircle = styled.div`
  width: 12px;
  height: 12px;
  margin-left: auto;
  margin-top: -4px;
  background: ${(props) => props.fillColor};
  border: 2px solid ${(props) => props.fillColor};
  border-radius: 100%;
`;


const ProgressBar = ({ progress, priority, active }) => {
  const color = () => (!active ? colors.grey : colors[priority]);
  return (
    <Wrapper>
      <Line>
        <FilledLine progress={progress} fillColor={color}>
          <FilledCircle fillColor={color} />
        </FilledLine>
        <Circle />
      </Line>
    </Wrapper>
  );
};

ProgressBar.propTypes = {
  progress: PropTypes.number.isRequired,
  priority: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
};

export default ProgressBar;

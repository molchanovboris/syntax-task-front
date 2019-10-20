import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Input } from 'reactstrap';

import colors from '../../config/colors';

const StyledInput = styled(Input)`
  width: 200px;
  border: 1px solid ${colors.sidebar};
  background: white;

  ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: ${colors.placeholder};
    opacity: 1; /* Firefox */
  }
  
  :-ms-input-placeholder { /* Internet Explorer 10-11 */
    color: ${colors.placeholder};
  }
  
  ::-ms-input-placeholder { /* Microsoft Edge */
    color: ${colors.placeholder};
  }
}
`;

const MyInput = ({ children, ...rest }) => (
  <StyledInput {...rest}>
    {children}
  </StyledInput>
);

MyInput.propTypes = {
  children: PropTypes.instanceOf(Object),

};
MyInput.defaultProps = {
  children: PropTypes.isNotNull,

};

export default MyInput;

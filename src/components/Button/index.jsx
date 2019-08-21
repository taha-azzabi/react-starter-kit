import React from 'react';
import PropTypes from 'prop-types';
import StyledButton from './StyledButton';

const Button = prop => {
  const { children, type, disabled } = prop;
  return (
    <StyledButton type={type} disabled={disabled}>
      {children}
    </StyledButton>
  );
};

Button.prototype = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  type: 'Button',
};

export default Button;

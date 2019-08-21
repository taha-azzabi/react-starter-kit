import React from 'react';
import PropTypes from 'prop-types';
import StyledButton from './StyledButton';

const Button = props => {
  const { children, type, disabled } = props;
  return (
    <StyledButton type={type} disabled={disabled}>
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  type: 'Button',
};

export default Button;

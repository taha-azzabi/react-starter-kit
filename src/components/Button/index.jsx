import React from 'react';
import PropTypes from 'prop-types';
import StyledButton from './StyledButton';

const Button = props => {
  const { children, type, disabled, loading, ...rest } = props;
  return (
    <StyledButton type={type} disabled={disabled || loading} {...rest}>
      {loading ? 'Chargement...' : children}
    </StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
};

Button.defaultProps = {
  type: 'Button',
  loading: false,
};

export default Button;

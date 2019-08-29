import React from 'react';
import PropTypes from 'prop-types';
import StyledLogo from './StyledLogo';

const Logo = props => {
  const { children, color, customFont, ...rest } = props;
  return (
    <StyledLogo color={color} customFont={customFont} {...rest} aria-label="dsdds">
      {children}
    </StyledLogo>
  );
};

Logo.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  customFont: PropTypes.string,
};

export default Logo;

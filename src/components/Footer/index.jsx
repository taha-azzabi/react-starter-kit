import React from 'react';
import PropTypes from 'prop-types';
import StyledFooter from './StyledFooter';

const Footer = props => {
  const { children, className, color, fixed } = props;
  return (
    <StyledFooter
      id="footer"
      className={`site-footer ${className}`}
      color={color}
      fixed={fixed}
    >
      {children}
    </StyledFooter>
  );
};
Footer.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  color: PropTypes.string,
  fixed: PropTypes.bool,
};
export default Footer;

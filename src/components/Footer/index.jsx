import React from 'react';
import PropTypes from 'prop-types';
import StyledFooter from './StyledFooter';

const Footer = props => {
  const { children, className, color } = props;
  return (
    <StyledFooter id="footer" className={`site-footer ${className}`} color={color}>
      {children}
    </StyledFooter>
  );
};
Footer.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  color: PropTypes.string,
};
export default Footer;

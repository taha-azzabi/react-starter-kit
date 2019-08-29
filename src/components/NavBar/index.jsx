import React from 'react';
import PropTypes from 'prop-types';
import StyledNavBar from './StyledNavBar';

const NavBar = props => {
  const { children, transparent, ...rest } = props;
  return (
    <StyledNavBar transparent={transparent} {...rest}>
      {children}
    </StyledNavBar>
  );
};

NavBar.propTypes = {
  children: PropTypes.node.isRequired,
  transparent: PropTypes.bool,
};

NavBar.defaultProps = {
  transparent: false,
};
export default NavBar;

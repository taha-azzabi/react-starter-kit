import React from 'react';
import PropTypes from 'prop-types';
import StyledHeading from './StyledHeading';

const Heading = props => {
  const { level, color, children } = props;
  return (
    <StyledHeading as={`h${level}`} level={level} color={color}>
      {children}
    </StyledHeading>
  );
};

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  level: PropTypes.string,
  color: PropTypes.string,
};

Heading.defaultProps = {
  level: 1,
};

export default Heading;

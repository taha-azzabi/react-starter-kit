import React from 'react';
import StyledHeading from './StyledHeading';

const Heading = (props) => {
  const { level, color, children } = props;
  return (
    <StyledHeading as={`h${level}`} level={level} color={color}>
      {children }
    </StyledHeading>
  );
};

Heading.defaultProps = {
  level: 1,
};

export default Heading;

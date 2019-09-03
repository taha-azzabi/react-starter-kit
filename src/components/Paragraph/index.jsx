import React from 'react';
import PropTypes from 'prop-types';
import StyledParagraph from './StyledParagraph';

const Paragraph = props => {
  const { children, color, align, className } = props;
  return (
    <StyledParagraph color={color} align={align} className={className}>
      {children}
    </StyledParagraph>
  );
};

Paragraph.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  align: PropTypes.string,
  className: PropTypes.string,
};

export default Paragraph;

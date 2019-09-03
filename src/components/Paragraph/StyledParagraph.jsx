import styled, { css } from 'styled-components';

const alignType = {
  start: 'start',
  end: 'end',
  left: 'left',
  right: 'right',
  center: 'center',
  justify: 'justify',
  'match-parent': 'match-parent',
};

const alignStyle = css`
  text-align: ${props => alignType[props.align]};
`;

const StyledParagraph = styled.p`
  ${props => props.align && alignStyle}
  color: ${props => props.color}
`;

export default StyledParagraph;

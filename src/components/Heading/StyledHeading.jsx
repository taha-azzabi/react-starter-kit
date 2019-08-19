import styled, { css } from 'styled-components';

const colorStyle = css`
  color: ${props => props.color};
`;

const StyledHeading = styled.h1`
  ${props => props.color && colorStyle};
`;
export default StyledHeading;

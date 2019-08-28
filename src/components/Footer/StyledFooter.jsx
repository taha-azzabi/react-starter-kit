import styled, { css } from 'styled-components';

const fixedStyle = css`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
`;
const StyledFooter = styled.footer`
  background-color: ${props => props.color};
  ${props => props.fixed && fixedStyle};
`;

export default StyledFooter;

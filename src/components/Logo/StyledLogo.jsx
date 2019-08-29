import styled, { css } from 'styled-components';
import { NavbarBrand } from 'reactstrap';

const colorStyle = css`
  color: ${props => props.color};
`;

const fontStyle = props => {
  console.log(props);
  return css`
    font-family: 'Anton';
  `;
};
const StyledLogo = styled(NavbarBrand)`
  ${fontStyle}
  ${props => props && colorStyle}
`;

export default StyledLogo;

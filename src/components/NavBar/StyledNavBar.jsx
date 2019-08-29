import styled, { css } from 'styled-components';
import { Navbar } from 'reactstrap';

const styleBackground = css`
  background: ${props => (props.transparent ? 'none' : undefined)};
`;
const StyledNavBar = styled(Navbar)`
  ${styleBackground};
`;
export default StyledNavBar;

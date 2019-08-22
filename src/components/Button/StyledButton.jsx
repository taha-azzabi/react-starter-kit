import styled, { css } from 'styled-components';
import { Button } from 'react-bootstrap';

const backgroundStyle = css`
  background-color: ${props => props.color};
  border-color: ${props => props.color};
  &:hover {
    background: red;
    color: #fff;
  }
`;
const StyledButton = styled(Button)`
  ${props => props.color && backgroundStyle};
`;

export default StyledButton;

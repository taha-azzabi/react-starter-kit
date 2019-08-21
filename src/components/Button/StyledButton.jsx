import styled, { css } from 'styled-components';
import { Button } from 'react-bootstrap';

const backgroundStyle = css`
  background-color: ${props => props.color};
`;
const StyledButton = styled(Button)`
  cursor: pointer;
  ${props => props.color && backgroundStyle};
`;

export default StyledButton;

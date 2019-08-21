import { Button } from 'react-bootstrap';
import styled from 'styled-components';

const StyledButton = styled(Button)`
  cursor: pointer;
  background-color: ${props => props.theme.color};
`;

export default StyledButton;

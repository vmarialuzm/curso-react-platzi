import styled from 'styled-components';

const Button = ({ children, blue }) => {
  return (
    <StyledButton blue={blue}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  background-color: ${props => props.blue ? 'blue' : 'grey'};
`;

export default Button;
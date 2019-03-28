import styled, { keyframes } from 'styled-components';



const spin = keyframes`
  to { transform: rotate(360deg); }
`;

export default styled.div`
  display: block;
  width: 3em;
  height: 3em;
  border: 5px solid ${({ theme }) => theme.palette.primary.mainWithOpacity};
  border-radius: 50%;
  border-top-color: ${({ theme }) => theme.palette.primary.main};
  animation: ${spin} 1s ease-in-out infinite;
`;

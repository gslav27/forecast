import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';



const test = keyframes`
  10% { opacity: 1};
  50% { opacity: 0.3 };
  90% { opacity: 1 };
`;

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 48px;
  height: 48px;
  padding: 0;
  border-radius: 25px;
  border: none;
  background: none;
  transition: all 1s linear;
  position: relative;
  ::after {
    content: '';
    display: block;
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      rgba(225, 225, 225, 0.5), rgba(225, 225, 225, 0.5), rgba(225, 225, 225, 0.5), rgba(225, 225, 225, 0.5),
      rgba(225, 225, 225, 0), rgba(225, 225, 225, 0), rgba(225, 225, 225, 0)
    );
    transition: all 0.2s linear;
    opacity: 0;
  };
  &:hover {
    cursor: pointer;
  };  
  :focus {
    outline: none;
    ::after {
      opacity: 1;
      animation: ${test} 1.2s linear 2s infinite;
    };
  };
`;


const IconButton = ({ children, ...props }) => (
  <StyledButton
    {...props}
  >
    {children}
  </StyledButton>
);


IconButton.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};


export default memo(IconButton);

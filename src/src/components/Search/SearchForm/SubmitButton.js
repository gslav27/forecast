import React, { memo } from 'react';
import styled from 'styled-components';



const Button = styled.button`
  min-width: 70px;
  height: 100%;
  padding: 0px 10px 0px 5px;
  font-size: 1em;
  color: #fff;
  background-color: ${({ theme }) => theme.palette.primary.main};
  border: none;
  border-radius: 0px 25px 25px 0px;
  cursor: pointer;
  :hover {
    box-shadow: 0px 0px 3px 0px ${({ theme }) => theme.palette.primary.main};
  };
  :focus {
    outline: none;
    box-shadow: 0px 0px 1px 1px ${({ theme }) => theme.palette.primary.light},
                0px 0px 3px 0px ${({ theme }) => theme.palette.primary.main};
  }
`;


const SubmitButton = () => (
  <Button type='submit'>
    Search
  </Button>
);


export default memo(SubmitButton);

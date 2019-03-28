import React from 'react';
import styled from 'styled-components';

import HomeLink from './HomeLink';



const Header = styled.header`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  min-height: 56px;
  padding: 0px 16px;
  border-bottom: 2px solid ${({ theme }) => theme.palette.primary.light};
  background: ${({ theme }) => theme.palette.secondary.main};
  box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 3px 1px -2px rgba(0,0,0,0.12);
  
  ${({ theme }) => theme.mediaMixins.width.notXs(`
    min-height: 64px;
  `)}
`;


const HeaderLayout = () => (
  <Header>
    <HomeLink />
  </Header>
);


export default HeaderLayout;

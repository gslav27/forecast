import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';



const StyledLink = styled(Link)`
  display: inline-block;
  color: ${({ theme }) => theme.palette.primary.light};
  text-decoration: none;
  font-size: 1.7em;
  :hover {
    text-decoration: underline;
  };
  :focus { outline-color: ${({ theme }) => theme.palette.primary.light} };
`;

const HomeLink = () => (
  <StyledLink to={`${process.env.PUBLIC_URL}/`} title='to home page'>
    <span>WeatherForecast</span>
  </StyledLink>
);

export default memo(HomeLink);

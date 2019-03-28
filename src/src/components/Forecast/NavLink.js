import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Link } from 'react-router-dom';



const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 6px 20px;
  padding: 0px 16px;
  font-size: 1.2em;
  font-weight: 300;
  text-transform: uppercase;
  text-decoration: none;
  text-align: center;
  border-radius: 25px;
  color: ${({ theme }) => theme.palette.colors.light};
  background: ${({ theme }) => theme.palette.secondary.dark};
  transition: all 0.05s linear;
  overflow: hidden;
  ::before, ::after {
    content: '➜';
    display: block;
    font-size: 1.5em;
    font-weight: 100;
  };
  ::before {
    display: ${({ className }) => (className === 'withReturnIcon' ? 'block' : 'none')};
    margin-right: 10px;
    margin-bottom: -2px;
    transform: rotate(180deg);
  };
  ::after {
    display: ${({ className }) => (className === 'withNextIcon' ? 'block' : 'none')};
    margin-left: 10px;
    margin-top: -2px;
  };
  :hover {
    box-shadow: 0px 0px 7px ${({ theme }) => theme.palette.secondary.main};
    color: ${({ theme }) => theme.palette.primary.light};
  };
  :focus {
    outline: none;
    box-shadow: 0px 0px 5px 2px ${({ theme }) => theme.palette.secondary.main};
  };
  ${({ theme }) => theme.mediaMixins.width.notXs(`
    width: 175px;
    margin: 0px auto 20px;
  `)};
`;


const LinkComponent = ({
  to,
  title,
  children,
}) => (
  <StyledLink
    className={to ? 'withNextIcon' : 'withReturnIcon'}
    to={`${process.env.PUBLIC_URL}/${to}`}
    title={title}
    onClick={() => window.scrollTo(0, 0)}
  >
    {children || 'Back'}
  </StyledLink>
);

LinkComponent.propTypes = {
  to:       PropTypes.string,
  title:    PropTypes.string,
  children: PropTypes.node.isRequired,
};

LinkComponent.defaultProps = {
  to:     '',
  title:  'to main page',
};

export default memo(LinkComponent);

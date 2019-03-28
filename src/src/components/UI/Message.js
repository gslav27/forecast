import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';



const Text = styled.p`
  width: 100%;
  text-align: center;
  font-size: 1.5em;
  font-weight: 600;
  color: ${({ theme }) => theme.palette.secondary.light};
`;

const Message = ({ children }) => <Text>{ children }</Text>;

Message.propTypes = { children: PropTypes.node.isRequired };

export default Message;

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';



const List = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  margin: 0;
  padding: 5px 20px 0px;
  list-style: none;
`;

const ListItem = styled.li`
  display: inherit;
  margin: 0px 5px 5px;
`;

const Button = styled.button`
  padding: 2px 10px;
  color: ${({ theme }) => theme.palette.secondary.main};
  background-color: ${({ theme }) => theme.palette.colors.light};
  font-size: 0.8em;
  border: 1px solid ${({ theme }) => theme.palette.secondary.light};
  border-radius: 25px;
  cursor: pointer;
  :hover {
    box-shadow: 0px 0px 5px 0px ${({ theme }) => theme.palette.secondary.light};
  };
  :focus {
    outline: none;
    box-shadow: 0px 0px 5px 1px ${({ theme }) => theme.palette.secondary.light};
  }
`;



const SearchHistory = ({ data, onSelect }) => (
  <List>
    {
      data.map(value => (
        <ListItem key={value}>
          <Button
            type='button'
            onClick={() => onSelect(value)}
            title={`show forecast for ${value}`}
          >
            {value}
          </Button>
        </ListItem>
      ))
    }
  </List>
);

SearchHistory.propTypes = {
  data:     PropTypes.arrayOf(PropTypes.string).isRequired,
  onSelect: PropTypes.func.isRequired,
};


export default SearchHistory;

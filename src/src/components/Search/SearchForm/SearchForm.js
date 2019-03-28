import React, { useState, memo } from 'react';
import PropTypes from 'prop-types';
import startCase from 'lodash/startCase';
import styled from 'styled-components';

import SearchTextInput from './SearchTextInput';
import SubmitButton from './SubmitButton';



const Form = styled.form`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: flex-end;
  margin: 0px;
  height: 40px;
  width: 100%;
  * { transition: all 0.05s  linear };
`;


const SearchForm = ({ onSubmit }) => {
  const [searchText, setSearchText] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    const formattedSearchText = startCase(searchText);
    if (formattedSearchText.length <= 2) return alert('need more letters for search request!');
    onSubmit(formattedSearchText);
    setSearchText('');
  }
  return (
    <Form onSubmit={handleSubmit}>
      <SearchTextInput
        searchText={searchText}
        onChange={value => setSearchText(value)}
      />
      <SubmitButton />
    </Form>
  );
};


SearchForm.propTypes = { onSubmit: PropTypes.func.isRequired };

export default memo(SearchForm);

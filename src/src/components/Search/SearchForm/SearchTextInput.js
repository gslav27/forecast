import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import themes from '_Utils_/themes/themes';

import Search from '_Ui_/Icons/Search';
import Close from '_Ui_/Icons/Close';
import IconButton from '_Ui_/IconButton';



const InputContainer = styled.div`
  position: relative;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: #fff;
  border: 1px solid ${({ theme }) => theme.palette.primary.main};
  border-radius: 25px 0px 0px 25px;

  > button { z-index: 1 };
  :hover { box-shadow: 0px 0px 4px ${({ theme }) => theme.palette.primary.main} };
`;

const Input = styled.input`
  position: absolute;
  height: 100%;
  width: 100%;
  font-size: 1em;
  padding: 0px 48px;
  background-color: rgba(0,0,0,0);
  border: none;
  border-radius: 25px 0px 0px 25px;
  
  :focus {
    outline: none;
    box-shadow: 0px 0px 4px 0px ${({ theme }) => theme.palette.primary.light},
                0px 0px 7px 0px ${({ theme }) => theme.palette.primary.main};
  };
`;


const SearchTextInput = ({
  searchText,
  onChange,
}) => {
  const searchTextInputRef = useRef(null);

  function handleClearButtonClick() {
    onChange('');
    searchTextInputRef.current.focus();
  }

  return (
    <InputContainer>
      <IconButton
        type='button'
        onClick={() => { searchTextInputRef.current.focus(); }}
      >
        <Search nativeColor={themes.palette.secondary.light} />
      </IconButton>
      <Input
        ref={searchTextInputRef}
        type='text'
        value={searchText}
        onChange={e => onChange(e.target.value)}
        placeholder='your city name'
      />
      {
        searchText && (
          <IconButton
            type='button'
            onClick={handleClearButtonClick}
          >
            <Close nativeColor={themes.palette.secondary.main} />
          </IconButton>
        )
      }
    </InputContainer>
  );
};

SearchTextInput.propTypes = {
  searchText: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SearchTextInput;

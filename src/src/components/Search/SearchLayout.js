import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';



const Container = styled.div`
  display: block;
  min-height: 70px;
  width: calc(100% - 12px);
  max-width: 550px;
  margin: 0 auto;
  padding: 20px 0px 10px;
`;


const SearchLayout = ({
  searchForm,
  searchHistory,
}) => (
  <Container>
    {searchForm}
    {searchHistory}
  </Container>
);

SearchLayout.propTypes = {
  searchForm:     PropTypes.node.isRequired,
  searchHistory:  PropTypes.node.isRequired,
};

export default SearchLayout;

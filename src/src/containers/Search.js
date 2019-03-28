import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  getForecast,
  setCurrentCityName,
} from '../store/forecast/forecastActionCreators';

import { getSearchHistory } from '../store/forecast/forecastSelectors';

import SearchLayout from '../components/Search/SearchLayout';
import SearchForm from '../components/Search/SearchForm/SearchForm';
import SearchHistory from '../components/Search/SearchHistory';



const Search = ({
  searchHistory,
  getForecast,
  setCurrentCityName,
}) => (
  <SearchLayout
    searchForm={<SearchForm onSubmit={getForecast} />}
    searchHistory={
      !!searchHistory.length && (
        <SearchHistory
          data={searchHistory}
          onSelect={setCurrentCityName}
        />
      )}
  />
);


Search.propTypes = {
  searchHistory: PropTypes.arrayOf(PropTypes.string).isRequired,
  getForecast:   PropTypes.func.isRequired,
};

const mapStateToProps = state => ({ searchHistory: getSearchHistory(state) });

const mapDispatchToProps = ({
  getForecast,
  setCurrentCityName,
});


export default connect(mapStateToProps, mapDispatchToProps)(Search);

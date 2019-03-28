import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { routes } from '_Utils_/constants/constants';
import { forecastListInterface } from '_Utils_/types/interfaces';

import {
  getCurrentCityName,
  getForecastLoadingStatus,
  getForecastLoadingError,
  getForecastData,
  getIsMainPage,
} from '../store/forecast/forecastSelectors';

import ForecastLayout from '../components/Forecast/ForecastLayout';
import ForecastCard from '../components/Forecast/ForecastCard';
import NavLink from '../components/Forecast/NavLink';



const Forecast = ({
  currentCityName,
  loading,
  loadingError,
  forecastData,
  isMainPage,
}) => (
  currentCityName && (
    <ForecastLayout
      loading={loading}
      loadingError={loadingError}
      title={currentCityName}
      subTitle={isMainPage ? '24 hours' : '3 days'}
      data={
        forecastData.map(data => (
          <ForecastCard
            key={data.dt}
            dt={data.dt}
            main={data.main}
            weather={data.weather}
            clouds={data.clouds}
            wind={data.wind}
            dt_txt={data.dt_txt}
          />
        ))
      }
      navLink={(
        <NavLink
          to={isMainPage ? routes.period : undefined}
          title={isMainPage ? 'show forecast for 3 days' : undefined}
        >
          {isMainPage && '3 days'}
        </NavLink>
      )}
    />
  )
);



Forecast.propTypes = {
  currentCityName:  PropTypes.string.isRequired,
  loading:          PropTypes.bool.isRequired,
  loadingError:     PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
  ]).isRequired,
  isMainPage:       PropTypes.bool.isRequired,
  forecastData:     forecastListInterface.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  currentCityName:  getCurrentCityName(state),
  loading:          getForecastLoadingStatus(state),
  loadingError:     getForecastLoadingError(state),
  forecastData:     getForecastData(state, ownProps),
  isMainPage:       getIsMainPage(state, ownProps),
});


export default connect(mapStateToProps)(Forecast);

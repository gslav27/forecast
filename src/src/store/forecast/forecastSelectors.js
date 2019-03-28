import { createSelector } from 'reselect';
import { routes } from '_Utils_/constants/constants';

const getPathname = (_, ownProps) => ownProps.location.pathname;

export const getCurrentCityName = state => state.forecast.currentCityName;
export const getForecastLoadingStatus = state => state.forecast.loading.currentCity;
export const getForecastLoadingError = state => state.forecast.loadingErrors.currentCity;
export const getHistory = state => state.forecast.history;

export const getSearchHistory = createSelector(
  [getHistory],
  history => history.map(data => data.searchText),
);

export const getIsMainPage = createSelector(
  [getPathname],
  pathname => (pathname !== `${process.env.PUBLIC_URL}/${routes.period}`),
);

const getForecastPeriod = createSelector(
  [getIsMainPage],
  isMainPage => (isMainPage ? 8 : 24),
);

const getCurrentCityData = createSelector(
  [getHistory, getCurrentCityName],
  (history, currentCityName) => history.find(data => (data.searchText === currentCityName)) || {},
);

const getForecastDataSelector = createSelector(
  [getCurrentCityData, getForecastPeriod],
  (currentCityData, period) => (
    currentCityData.list
      ? currentCityData.list.slice(0, period)
      : []
  ),
);

export const getForecastData = (state, ownProps) => {
  if (getForecastLoadingStatus(state) || getForecastLoadingError(state)) return [];
  return getForecastDataSelector(state, ownProps);
};


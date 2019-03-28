import { DB } from '_Utils_/constants/constants';
import * as types from './forecastActionTypes';


export const getForecast = city => ({
  type: types.GET_FORECAST,
  callAPI: `${DB.URL}/${DB.COLLECTIONS.forecast}?q=${city}&units=metric&appid=${DB.API_KEY}`,
  payload: city,
});

export const setCurrentCityName = city => ({
  type: types.SET_CURRENT_CITY_NAME,
  payload: city,
});

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import forecast from './forecast/forecastReducer';


export default combineReducers({
  forecast,
  routing: routerReducer,
});

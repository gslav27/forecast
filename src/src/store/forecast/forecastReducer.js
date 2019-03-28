import * as types from './forecastActionTypes';
import { SUCCESS, START, FAIL } from '../actionTypes';


const initialState = {
  currentCityName: '',
  history: [],
  loading: { currentCity: false },
  loadingErrors: { currentCity: false },
};


export default function (state = initialState, { type, payload, initialPayload }) {
  switch (type) {
    // START REQUESTS----------------------------------------------------
    case (types.GET_FORECAST + START):
      return {
        ...state,
        currentCityName: payload,
        loading: { ...state.loading, currentCity: true },
        loadingErrors: { ...state.loadingErrors, currentCity: false },
      };

    // SUCCESS REQUESTS----------------------------------------------------
    case (types.GET_FORECAST + SUCCESS):
      return {
        ...state,
        loading: { ...state.loading, currentCity: false },
        history: [
          {
            searchText: initialPayload,
            ...payload,
          },
          ...state.history.some(data => data.city.name === payload.city.name)
            ? state.history.filter(data => data.city.name !== payload.city.name)
            : state.history.slice(0, 4),
        ],
      };

    // FAIL REQUESTS----------------------------------------------------
    case (types.GET_FORECAST + FAIL):
      return {
        ...state,
        loading: { ...state.loading, currentCity: false },
        loadingErrors: { ...state.loadingErrors, currentCity: payload },
        history: [
          {
            searchText: initialPayload,
            city: { name: initialPayload },
            list: [],
          },
          ...state.history.some(data => data.searchText === initialPayload)
            ? state.history.filter(data => data.searchText !== initialPayload)
            : state.history.slice(0, 4),
        ],
      };

    // OTHER
    case (types.SET_CURRENT_CITY_NAME):
      return {
        ...state,
        loadingErrors: { ...state.loadingErrors, currentCity: false },
        currentCityName: payload,
      };

    default:
      return state;
  }
}

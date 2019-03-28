import { string, number, objectOf, oneOfType, arrayOf, shape } from 'prop-types';


export const IconsPropTypes = {
  style:        objectOf(oneOfType([string, number])),
  className:    string,
  nativeColor:  string,
  width:        oneOfType([string, number]),
  height:       oneOfType([string, number]),
  viewBox:      string,
};


export const forecastInterface = {
  dt:       number,
  main:     objectOf(number),
  weather:  arrayOf(shape({
    id:           number,
    main:         string,
    description:  string,
    icon:         string,
  })),
  clouds: objectOf(number),
  wind:   objectOf(number),
  dt_txt: string,
};


export const cityInterface = {
  id:       number,
  name:     string,
  country:  string,
};


export const forecastListInterface = arrayOf(shape(forecastInterface));

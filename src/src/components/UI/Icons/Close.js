import React from 'react';
import { IconsPropTypes } from '_Utils_/types/interfaces';
import { IconsDefaultProps } from '_Utils_/types/defaultData';

const Close = props => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={props.width}
    height={props.height}
    viewBox={props.viweBox}
  >
    <path
      d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'
      fill={props.nativeColor}
    />
    <path
      d='M0 0h24v24H0z'
      fill='none'
    />
  </svg>
);

Close.propTypes = IconsPropTypes;
Close.defaultProps = IconsDefaultProps;

export default Close;

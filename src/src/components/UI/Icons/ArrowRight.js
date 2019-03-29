import React from 'react';
import { IconsPropTypes } from '_Utils_/types/interfaces';
import { IconsDefaultProps } from '_Utils_/types/defaultData';

const ArrowRight = props => (
  <svg
    className={props.className}
    xmlns='http://www.w3.org/2000/svg'
    width={props.width}
    height={props.height}
    viewBox={props.viewBox}
  >
    <path
      d='M16.01 11H4v2h12.01v3L20 12l-3.99-4z'
      fill={props.nativeColor}
    />
    <path
      d='M0 0h24v24H0z'
      fill='none'
    />
  </svg>
);

ArrowRight.propTypes = IconsPropTypes;
ArrowRight.defaultProps = IconsDefaultProps;

export default ArrowRight;

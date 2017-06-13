import React from 'react';
import classnames from 'classnames';
import {
  SORT_UP,
  SORT_DOWN
} from '../constants';

const Th = ({ children, className, sort, handleSort }) => (
  <th className={className} onClick={() => handleSort()}>
    <span className={classnames({ '-sort-up': sort === SORT_UP, '-sort-down': sort === SORT_DOWN })}>
      {children}
    </span>
  </th>
);

export default Th;

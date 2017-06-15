import React from 'react';
import PropTypes from 'prop-types';
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

Th.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  sort: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  handleSort: PropTypes.func
};

Th.defaultProps = {
  children: null,
  className: null,
  sort: null,
  handleSort: () => {}
};

export default Th;

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  SORT_UP,
  SORT_DOWN,
  TYPE_NONE
} from '../constants';

const Th = ({ children, className, style, sort, type, handleSort }) => (
  <th
    className={classnames({ '-can-sort': type !== TYPE_NONE }, className)}
    style={style}
    onClick={() => handleSort()}
  >
    {type === TYPE_NONE ? (
      children
    ) : (
      <span className={classnames({ '-sort-up': sort === SORT_UP, '-sort-down': sort === SORT_DOWN })}>
        {children}
      </span>
    )}
  </th>
);

Th.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  sort: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  type: PropTypes.string,
  handleSort: PropTypes.func
};

Th.defaultProps = {
  children: null,
  className: null,
  sort: null,
  type: null,
  handleSort: () => {}
};

export default Th;

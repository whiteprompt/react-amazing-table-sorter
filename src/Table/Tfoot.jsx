import React from 'react';
import PropTypes from 'prop-types';

const Tfoot = ({ children, className }) => (
  <tfoot className={className}>{children}</tfoot>
);

Tfoot.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

Tfoot.defaultProps = {
  nodeType: 'tfoot',
  children: null,
  className: null
};

export default Tfoot;

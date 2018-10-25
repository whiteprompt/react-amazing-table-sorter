import React from 'react';
import PropTypes from 'prop-types';

const Tbody = ({ children, className }) => (
  <tbody className={className}>{children}</tbody>
);

Tbody.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

Tbody.defaultProps = {
  nodeType: 'tbody',
  children: null,
  className: null
};

export default Tbody;

import React from 'react';
import PropTypes from 'prop-types';

const Thead = ({ children, className }) => (
  <thead className={className}>{children}</thead>
);

Thead.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

Thead.defaultProps = {
  nodeType: 'thead',
  className: null
};

export default Thead;

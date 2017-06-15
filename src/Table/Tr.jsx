import React from 'react';
import PropTypes from 'prop-types';

const Tr = ({ children, className, onClick }) => (
  <tr className={className} onClick={onClick}>{children}</tr>
);

Tr.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func
};

Tr.defaultProps = {
  className: null,
  onClick: () => {}
};

export default Tr;

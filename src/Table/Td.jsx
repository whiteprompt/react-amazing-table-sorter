import React from 'react';
import PropTypes from 'prop-types';

const Td = ({ children, className, onClick }) => (
  <td className={className} onClick={onClick}>{children}</td>
);

Td.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func
};

Td.defaultProps = {
  children: null,
  className: null,
  onClick: () => {}
};

export default Td;

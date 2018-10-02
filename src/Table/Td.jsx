import React from 'react';
import PropTypes from 'prop-types';

const Td = props => {
  const ownProps = { ...props }
  delete ownProps.sort

  return (
    <td { ...ownProps }>{props.children}</td>
  );
}

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

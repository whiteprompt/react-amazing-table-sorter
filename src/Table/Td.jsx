import React from 'react';

const Td = ({ children, className, onClick }) => (
  <td className={className} onClick={onClick}>{children}</td>
);

export default Td;

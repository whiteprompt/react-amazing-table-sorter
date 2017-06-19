/* eslint-disable global-require, import/no-unresolved, react/no-multi-comp */
import React from 'react';
import ReactDOM from 'react-dom';
import { Table, Thead, Tbody, Tr, Th, Td } from '../src';

import './example.scss';

const province = (name, population, area, date) => ({
  name, population, area, date
});

const data = [
  province('Ciudad de Buenos Aires', 2891082, 203, new Date(1536, 1, 2)),
  province('Buenos Aires', 1559428, 307571, new Date(1560, 2, 3)),
  province('Catamarca', 367820, 102602, new Date(1584, 6, 9)),
  province('Chaco', 1053466, 99633, new Date(1591, 6, 5)),
  province('Chubut', 506668, 224686, new Date(1590, 2, 6)),
  province('Córdoba', 3304825, 307571, new Date(1573, 8, 7)),
  province('Corrientes', 993338, 88199, new Date(1593, 5, 8)),
  province('Entre Ríos', 1236300, 78781, new Date(1584, 6, 9)),
  province('Formosa', 527895, 72066, new Date(1582, 8, 10)),
  province('Jujuy', 2891082, 53219, new Date(1593, 9, 11)),
  province('La Pampa', 316940, 307571, new Date(1571, 1, 12)),
  province('La Rioja', 2891082, 89680, new Date(1584, 6, 9)),
  province('Mendoza', 1741610, 148827, new Date(1576, 0, 14)),
  province('Misiones', 2891082, 29801, new Date(1561, 11, 15)),
  province('Neuquén', 550334, 94078, new Date(1554, 4, 16)),
  province('Río Negro', 633374, 307571, new Date(1584, 6, 9)),
  province('Salta', 1215207, 155488, new Date(1582, 4, 18)),
  province('San Juan', 680427, 89651, new Date(1562, 0, 19)),
  province('San Luis', 431588, 76748, new Date(1561, 11, 20)),
  province('Santa Cruz', 272524, 307571, new Date(1560, 1, 21)),
  province('Santa Fe', 3200736, 133007, new Date(1584, 6, 9)),
  province('Santiago del Estero', 896461, 136351, new Date(1564, 7, 23)),
  province('Tierra del Fuego', 307571, 21263, new Date(1564, 4, 24)),
  province('Tucumán', 2891082, 22524, new Date(1584, 6, 9))
];

ReactDOM.render(
  <Table>
    <Thead>
      <Tr>
        <Th className="custom-class-1">Name</Th>
        <Th sort="number">Population</Th>
        <Th sort="number">Area (km2)</Th>
        <Th sort="date">Foundation date</Th>
        <Th sort="none">Actions</Th>
      </Tr>
    </Thead>
    <Tbody>
      {data.map(row => (
        <Tr key={row.name}>
          <Td className="custom-class-2">{row.name}</Td>
          <Td sort={row.population}>{row.population.toLocaleString()}</Td>
          <Td sort={row.area}>{row.area.toLocaleString()}</Td>
          <Td sort={row.date}>{row.date.toString()}</Td>
          <Td><a href="#">view</a></Td>
        </Tr>
      ))}
    </Tbody>
  </Table>,
  document.getElementById('app')
);

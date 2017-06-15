import React, { Component } from 'react';
import update from 'react-addons-update';
import classnames from 'classnames';

import Thead from './Table/Thead';
import Tbody from './Table/Tbody';
import Tr from './Table/Tr';
import Th from './Table/Th';
import Td from './Table/Td';

import {
  SORT_NATURAL,
  SORT_UP,
  SORT_DOWN,
  TYPE_TEXT,
  TYPE_NUMBER,
  TYPE_DATE,
} from './constants';


class Table extends Component {

  constructor(props){
    super(props);

    this.state = {
      keys: [],
      data: [],
      sort: {
        keys: [],
        data: []
      }
    };
  }

  collectKeys(row) {
    this.state.keys = row.props.children.map((child, index) => ({
      child,
      index,
      sort: SORT_NATURAL,
      type: child.props && child.props.sort ? child.props.sort : TYPE_TEXT
    }));
  }

  collectData(row){
    const getValue = (key, value) => key ? (
      key.type === TYPE_NUMBER ? parseFloat(value, 10) :
      key.type === TYPE_DATE   ? +new Date(value) || 0 :
      String(value || '')
    ) : value;

    this.state.data.push(row.props.children.map((child, i) => ({
      child,
      value: getValue(this.state.keys[i], 'sort' in child.props ? child.props.sort : child.props.children)
    })));
  }

  componentWillMount(){
    this.props.children.map((child) => {
      switch(child.type.name){
        case 'Thead':
          const row = child.props.children;
          if (row) {
            this.collectKeys(row);
          }
        break;

        case 'Tbody':
          child.props.children.forEach(row => this.collectData(row));
        break;
      }
    });

    this.state.sort.data = this.sort();
  }

  componentWillReceiveProps(nextProps){
    nextProps.children.map((child) => {
      switch(child.type.name){
        case 'Tbody':
          this.state.data = [];
          child.props.children.forEach(row => this.collectData(row));
        break;
      }
    });

    this.setState({
      ...this.state,
      sort: {
        ...this.state.sort,
        data: this.sort()
      }
    });
  }

  updateKey(index) {
    const sort = this.state.keys[index].sort;
    return update(this.state.keys, {
      [index]: {
        sort: {
          $set: sort === SORT_UP ? SORT_DOWN : (sort === SORT_NATURAL ? SORT_UP : SORT_NATURAL)
        }
      }
    });
  }

  handleSort(index) {
    const keys = this.updateKey(index);
    const sortKeys = this.getSortKeys(index);

    this.setState({
      keys,
      sort: {
        keys: sortKeys,
        data: this.sort(sortKeys)
      }
    });
  }

  getSortKeys(index){
    let keys = [...this.state.sort.keys];
    let sort = SORT_NATURAL;

    if (!~keys.findIndex(key => key.index === index)) {
      keys.push({ index, sort });
    }

    return keys.map((key) => {
      let sort = key.sort;

      if (key.index === index) {
         sort = key.sort === SORT_NATURAL ? SORT_UP : key.sort === SORT_UP ? SORT_DOWN : SORT_NATURAL
      }

      return { ...key, sort };
    })
    .filter(key => key.sort !== SORT_NATURAL);
  }

  sort(keys){
    const multiSort = (keys) => {
      const sort = direction => (a, b) => {
        let result = a === b ? 0 : a < b ? -1 : 1;
        if(direction === SORT_DOWN){
          result *= -1;
        }
        return result;
      }

      const fields = keys.map(key => ({
        ...key,
        sort: sort(key.sort)
      }));

      return (a, b) => {
        let result, i = 0;
        for(; i < fields.length; i++){
          result = fields[i].sort(a[fields[i].index].value, b[fields[i].index].value);
          if(result !== 0){
            break;
          }
        }
        return result;
      };
    };

    if((keys || this.state.sort.keys || []).length){
      return [...this.state.data].sort(multiSort(keys || this.state.sort.keys));
    }

    return [...this.state.data];
  }

	render(){
		return (
      <table className={classnames('react-amazing-table-sorter', this.props.className)}>
        <Thead>
          <Tr>
            {this.state.keys.map((item, i) => (
              <Th sort={item.sort} handleSort={() => this.handleSort(i)} key={`th-${i}`} className={item.child.props.className}>
                {item.child.props.children}
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {this.state.sort.data.map((tr, i) => (
            <Tr key={`tr-${i}`}>
              {tr.map((item, x) => (
                React.cloneElement(item.child, { key: `td-${i}-${x}`, ...item.child.props })
              ))}
            </Tr>
          ))}
        </Tbody>
      </table>
    );
	}
}

export default Table;

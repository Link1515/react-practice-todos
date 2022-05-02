import React, { Component } from 'react';
import ListItem from '../ListItem';
import './index.scss';

export default class List extends Component {
  render() {
    return (
      <ul className="list">
        <ListItem />
        <ListItem />
        <ListItem />
      </ul>
    );
  }
}

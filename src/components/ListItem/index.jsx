import React, { Component } from 'react';
import './index.scss';

export default class ListItem extends Component {
  render() {
    return (
      <li className="listItem">
        <input type="checkbox" />
        <label>項目</label>
      </li>
    );
  }
}

import React, { Component } from 'react';
import './index.scss';

export default class ListItem extends Component {
  render() {
    const { id, name } = this.props;

    return (
      <li className="listItem">
        <label htmlFor={'listItem' + id}>
          <input type="checkbox" id={'listItem' + id} />
          {name}
        </label>
      </li>
    );
  }
}

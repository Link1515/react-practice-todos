import React, { Component } from 'react';
import './index.scss';

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <input type="text" placeholder="請輸入代辦事項" />
      </div>
    );
  }
}

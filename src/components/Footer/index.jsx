import React, { Component } from 'react';
import './index.scss';

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div>
          <input type="checkbox" />
          已完成 0 / 未完成 5
        </div>
        <button className="btn btn-danger">清除已完成</button>
      </div>
    );
  }
}

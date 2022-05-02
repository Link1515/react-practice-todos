import React, { Component } from 'react';
import './index.scss';

export default class ListItem extends Component {
  state = {
    mouse: false
  };

  handleMouse = (flag) => {
    return () => {
      this.setState({ mouse: flag });
    };
  };

  render() {
    const { id, name } = this.props;
    const { mouse } = this.state;

    return (
      <li className="listItem" onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
        <label htmlFor={'listItem' + id}>
          <input type="checkbox" id={'listItem' + id} />
          {name}
        </label>
        <button className="btn btn-danger" style={{ display: mouse ? '' : 'none' }}>
          刪除
        </button>
        {/* 另一種寫法 */}
        {/* {mouse ? <button className="btn btn-danger">刪除</button> : null} */}
      </li>
    );
  }
}

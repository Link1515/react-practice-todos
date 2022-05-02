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

  handleChange = (id) => {
    return (event) => {
      this.props.updateTodoState(id, event.target.checked);
    };
  };

  render() {
    const { id, name, done } = this.props;
    const { mouse } = this.state;

    return (
      <li className="listItem" onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
        <label htmlFor={'listItem' + id}>
          <input onChange={this.handleChange(id)} type="checkbox" id={'listItem' + id} defaultChecked={done} />
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

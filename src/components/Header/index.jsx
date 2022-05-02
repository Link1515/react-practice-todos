import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import './index.scss';

export default class Header extends Component {
  handleKeyUp = (event) => {
    const { target, keyCode } = event;

    if (keyCode !== 13) return;
    if (target.value.trim() === '') {
      alert('名稱不可為空');
      return;
    }

    const { addTodo } = this.props;

    addTodo({
      id: nanoid(),
      name: target.value,
      done: false
    });

    target.value = '';
  };

  render() {
    return (
      <div className="header">
        <input onKeyUp={this.handleKeyUp} type="text" placeholder="請輸入代辦事項" />
      </div>
    );
  }
}

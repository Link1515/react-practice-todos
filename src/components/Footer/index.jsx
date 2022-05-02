import React, { Component } from 'react';
import './index.scss';

export default class Footer extends Component {
  handleCheckAll = (event) => {
    this.props.checkAll(event.target.checked);
  };

  render() {
    const { todos, clearDone } = this.props;

    const doneCount = todos.reduce((acc, cur) => {
      if (cur.done) {
        acc++;
      }
      return acc;
    }, 0);
    const total = todos.length;

    return (
      <div className="footer">
        <div>
          <input type="checkbox" onChange={this.handleCheckAll} checked={doneCount === total && total !== 0} />
          已完成 {doneCount} / 未完成 {total}
        </div>
        <button onClick={clearDone} className="btn btn-danger">
          清除已完成
        </button>
      </div>
    );
  }
}

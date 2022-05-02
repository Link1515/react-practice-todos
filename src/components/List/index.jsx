import React, { Component } from 'react';
import ListItem from '../ListItem';
import './index.scss';

export default class List extends Component {
  render() {
    const { todos, updateTodoState } = this.props;

    return (
      <ul className="list">
        {todos.map((todo) => (
          <ListItem {...todo} key={todo.id} updateTodoState={updateTodoState} />
        ))}
      </ul>
    );
  }
}

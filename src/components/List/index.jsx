import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListItem from '../ListItem';
import './index.scss';

export default class List extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    updateTodoState: PropTypes.func.isRequired,
    removeTodo: PropTypes.func.isRequired
  };

  render() {
    const { todos, updateTodoState, removeTodo } = this.props;

    return (
      <ul className="list">
        {todos.map((todo) => (
          <ListItem {...todo} key={todo.id} updateTodoState={updateTodoState} removeTodo={removeTodo} />
        ))}
      </ul>
    );
  }
}

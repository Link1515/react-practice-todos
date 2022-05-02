import { Component } from 'react';
import Header from './components/Header';
import List from './components/List';
import Footer from './components/Footer';
import './App.scss';

export default class App extends Component {
  state = {
    todos: [
      { id: '001', name: '吃早餐', done: true },
      { id: '002', name: '吃午餐', done: false },
      { id: '003', name: '吃晚餐', done: false }
    ]
  };

  addTodo = (ListItemObj) => {
    const { todos } = this.state;
    const newTodos = [ListItemObj, ...todos];
    this.setState({ todos: newTodos });
  };

  render() {
    const { todos } = this.state;

    return (
      <div className="app">
        <Header addTodo={this.addTodo} />
        <List todos={todos} />
        <Footer />
      </div>
    );
  }
}

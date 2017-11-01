import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import TodoForm from './components/TodosForm';
import Texts from './components/Todos';

class App extends Component {
  render() {
    return (
      <div className="App">
      <TodoForm/>
      <Texts/>
      </div>
    );
  }
}

export default App;

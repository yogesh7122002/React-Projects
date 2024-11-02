import React from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import Todo from './components/Todo';
import './index.css';

function App() {
  return (
    <>
      <AddTodo />
      <Todo />
    </>
  );
}

export default App;

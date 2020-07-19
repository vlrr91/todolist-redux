import React from 'react';

// Containers
import AddTodo from './containers/AddTodo';
import VisibleTodoList from './containers/VisibleTodoList';

// Styles
import './App.css';

function App() {
  return (
    <>
      <AddTodo />
      <VisibleTodoList />
    </>
  );
}

export default App;

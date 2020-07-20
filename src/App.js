import React from 'react';

// Containers
import AddTodo from './containers/AddTodo';
import VisibleTodoList from './containers/VisibleTodoList';

// Components
import Tabs from './components/Tabs';

// Styles
import './App.css';

function App() {
  return (
    <>
      <AddTodo />
      <Tabs />
      <VisibleTodoList />
    </>
  );
}

export default App;

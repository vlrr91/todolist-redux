import React from 'react';
import { Provider } from 'react-redux';

// Redux
import store, { saveState } from './store';

// Hooks
import useSaveState from './hooks/useSaveState';

// Containers
import AddTodo from './containers/AddTodo';
import VisibleTodoList from './containers/VisibleTodoList';

// Components
import Tabs from './components/Tabs';

// Styles
import './App.css';

function App() {
  useSaveState(store, saveState);

  return (
    <Provider store={store}>
      <main className="todo-main">
        <h1 className="todo-title">TODO LIST</h1>
        <AddTodo />
        <Tabs />
        <VisibleTodoList />
      </main>
    </Provider>
  );
}

export default App;

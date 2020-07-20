import React from 'react';
import PropTypes from 'prop-types';

// Components
import Todo from './Todo';

export default function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul>
      {todos.map(todo => (
        <Todo
          key={todo.id}
          {...todo}
          toggleTodo={() => toggleTodo(todo.id)}
          deleteTodo={() => deleteTodo(todo.id)} />
      ))}
    </ul>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired
    }).isRequired
  ).isRequired
};

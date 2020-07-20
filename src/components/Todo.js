import React from 'react';
import PropTypes from 'prop-types';

export default function Todo({
  text,
  completed,
  toggleTodo,
  deleteTodo
}) {
  return (
    <li
      onClick={toggleTodo}
      style={{
        textDecoration: completed ? 'line-through' : 'none'
      }}>
      {text}
      <button onClick={deleteTodo}>Delete</button>
    </li>
  );
}

Todo.propTypes = {
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
};

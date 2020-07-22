import React from 'react';
import PropTypes from 'prop-types';

// Style
import './Todo.css';

export default function Todo({
  text,
  completed,
  toggleTodo,
  deleteTodo
}) {
  const completedClass = completed ? 'completed' : '';

  return (
    <li
      className={`todo ${completedClass}`}
      onClick={toggleTodo}>
      <span>{text}</span>
      <button
        className="todo-btn-delete"
        onClick={deleteTodo}>Delete</button>
    </li>
  );
}

Todo.propTypes = {
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
};

import React from 'react';
import PropTypes from 'prop-types';

// Components
import Todo from './Todo';

export default function TodoList({ todos }) {
  return (
    <ul>
      {todos.map(todo => (
        <Todo
          key={todo.id}
          text={todo.text} />
      ))}
    </ul>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired
    }).isRequired
  ).isRequired
};

import React from 'react';
import { connect } from 'react-redux';

// Actions
import { addTodo } from '../actions';

// Styles
import './AddTodo.css';

function AddTodo({ dispatch }) {
  let input;

  function handleSubmit(e) {
    e.preventDefault();

    if (!input.value.trim()) return;

    dispatch(addTodo(input.value));
    input.value = '';
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          ref={node => (input = node)}
          className="todo-input"
          placeholder="write here" />
        <input
          type="submit"
          value="Add Todo"
          className="todo-btn-add" />
      </form>
    </div>
  );
}

export default connect()(AddTodo);
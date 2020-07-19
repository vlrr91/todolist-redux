import React from 'react';
import { connect } from 'react-redux';

// Actions
import { addTodo } from '../actions';

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
        <input ref={node => (input = node)} />
        <input
          type="submit"
          value="Add Todo" />
      </form>
    </div>
  );
}

export default connect()(AddTodo);
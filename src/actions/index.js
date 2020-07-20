let nextTodoId = 0;

export function addTodo(text) {
  return {
    type: 'ADD_TODO',
    payload: {
      id: nextTodoId++,
      text
    }
  };
}

export function toggleTodo(id) {
  return {
    type: 'TOGGLE_TODO',
    payload: {
      id
    }
  }
}

export function deleteTodo(id) {
  return {
    type: 'DELETE_TODO',
    payload: {
      id
    }
  }
}

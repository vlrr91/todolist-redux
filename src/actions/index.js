import { v4 as uuid } from 'uuid';

export function addTodo(text) {
  return {
    type: 'ADD_TODO',
    payload: {
      id: uuid(),
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

export function setVisibilityFilter(filter) {
  return {
    type: 'SET_VISIBILITY_FILTER',
    payload: {
      filter
    }
  }
}

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
  SHOW_COMPLETED: 'SHOW_COMPLETED'
}

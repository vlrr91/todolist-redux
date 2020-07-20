import { connect } from 'react-redux';

// Actions
import { toggleTodo, deleteTodo, VisibilityFilters } from '../actions';

// Components
import TodoList from '../components/TodoList';

function getVisibleTodos(todos, filter) {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(todo => todo.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed);
    default:
      throw new Error(`Unknown filter: ${filter}`);
  }
}

function mapStateToProps(state) {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
};

function mapDispatchToProps(dispatch) {
  return {
    toggleTodo: id => dispatch(toggleTodo(id)),
    deleteTodo: id => dispatch(deleteTodo(id)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

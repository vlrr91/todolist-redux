import { connect } from 'react-redux';

// Actions
import { toggleTodo, deleteTodo } from '../actions';

// Components
import TodoList from '../components/TodoList';

function mapStateToProps(state) {
  return {
    todos: state.todos
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

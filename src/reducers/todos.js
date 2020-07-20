export default function todos(state = [], action) {
  switch(action.type) {
    case 'ADD_TODO':
      const { id, text } = action.payload;
      return [
          ...state,
          {
            id,
            text,
            completed: false
          }
        ];
    case 'TOGGLE_TODO':
      return state.map(todo => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo;
      });
    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== action.payload.id);
    default:
      return state;
  }
}
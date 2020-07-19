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
        ]
    default:
      return state;
  }
}
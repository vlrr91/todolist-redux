import { createStore } from 'redux';

// Reducer
import reducer from '../reducers';

const globalState = localStorage.getItem('GLOBAL_STATE');
const initialState = localStorage ? JSON.parse(globalState) : undefined;

const store = createStore(reducer, initialState);

export function saveState(store) {
  const state = store.getState();

  localStorage.setItem('GLOBAL_STATE', JSON.stringify(state));
}

export default store;
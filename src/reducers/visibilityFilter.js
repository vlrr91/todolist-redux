import { VisibilityFilters } from '../actions';

export default function VisibilityFilter(state = VisibilityFilters.SHOW_ALL, action) {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.payload.filter;
    default:
      return state;
  }
}

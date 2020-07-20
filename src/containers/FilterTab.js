import { connect } from 'react-redux';
import { setVisibilityFilter } from "../actions";

// Components
import Tab from '../components/Tab';

function mapStateToProps(state, ownProps) {
  return {
    active: ownProps.filter === state.visibilityFilter
  }
}

function mapDispatchProps(dispatch, ownProps) {
  return {
    onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchProps
)(Tab);
import React from 'react';
import PropTypes from 'prop-types';

export default function Tab({ onClick, children, active }) {
  return (
    <button
      onClick={onClick}
      disabled={active}>
      {children}
    </button>
  );
}

Tab.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
};

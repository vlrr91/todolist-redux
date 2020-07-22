import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './Tab.css';

export default function Tab({ onClick, children, active }) {
  const activeClass = active ? "active" : '';
  return (
    <button
      className={`tab-btn ${activeClass}`}
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

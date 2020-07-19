import React from 'react';
import PropTypes from 'prop-types';

export default function Todo({ text }) {
  return (
    <li>
      {text}
    </li>
  );
}

Todo.propTypes = {
  text: PropTypes.string.isRequired
};

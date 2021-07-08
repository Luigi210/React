import React from "react";

import PropTypes from 'prop-types';

export function TodoItem({ todo, index }) {
  return (
    <li>
      <strong>{index + 1}</strong> {todo.title}
    </li>
  );
}

TodoItem.PropTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number
}

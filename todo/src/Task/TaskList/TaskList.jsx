import React from "react";
import PropTypes from "prop-types";

export default function TaskList({ todo, removeTodo }) {
  return (
    <>
      <div className="task-list-checked">
        <label>
          <input
            type="checkbox"
            value="todo"
            onChange={() => {
              todo.checked = !todo.checked;
            }}
          />
          <h4 className="task-list-title">{todo.todoText}</h4>
        </label>
      </div>
      <p className="task-list-date">{todo.date}</p>
      <button
        className="task-list-remove"
        onClick={() => {
          return removeTodo(todo.id);
        }}
      >
        Delete
      </button>
    </>
  );
}

// TaskList.PropTypes = {
//   list: PropTypes.arrayOf(PropTypes.object).isRequired
// };
// //

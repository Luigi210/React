import React from "react";
import PropTypes from "prop-types";
import "./TaskList.css"
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function TaskList({ todo, removeTodo }) {
  return (
    <div className="mainList">
      <div className="task-list-checked">
        <label>
          <input
            className="check"
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
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </div>
  );
}

// TaskList.PropTypes = {
//   list: PropTypes.arrayOf(PropTypes.object).isRequired
// };
// //

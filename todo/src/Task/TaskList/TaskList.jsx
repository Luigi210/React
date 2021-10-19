import React from "react";
import PropTypes from "prop-types";
import "./TaskList.css";
import { useState } from "react";

export default function TaskList({ todo, removeTodo }) {
  const [className, setClassName] = useState("task-list-title");
  return (
    <>
      <div className="task-list-checked">
        <label className="container">
          <input
            type="checkbox"
            value="todo"
            onChange={() => {
              todo.checked = !todo.checked;
              console.log(todo.checked);
              if(todo.checked === true){
                // className += ' active';
                setClassName('task-list-title active')
              }
              else setClassName('task-list-title');
              console.log(className);
            }}
            // className={className}
          />
          <h4 className={className}>{todo.todoText}</h4>
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

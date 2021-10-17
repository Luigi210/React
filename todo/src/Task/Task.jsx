import { number } from "prop-types";
import react from "react";
import React from "react";
import { useState, useEffect } from "react";
import TaskList from "./TaskList/TaskList";

export default function Task() {
  const [showForm, setShowForm] = useState(false);
  const [todoText, setTodoText] = useState("");
  const [arrayTodo, setArrayTodo] = useState([]);
  const [cnt, setCnt] = useState(0);
  const [date, setDate] = useState(null);
  const removeTodo = (id) => {
    const todos = arrayTodo.filter((todo) => todo.id !== id);
    setArrayTodo(todos);
  };
  return (
    <>
      <h2 className="task-manager-title">Task Manager</h2>
      <input
        className="todo-text"
        type="text"
        onChange={(event) => {
          setTodoText(event.target.value);
        }}
      />
      <input
        className="date-check"
        type="date"
        value="2021-10-20"
        min="2021-01-20"
        onChange={(event) => {
          setDate(event.target.value);
        }}
      />
      <button
        className="add-todo"
        onClick={() => {
          if (todoText !== "") {
            arrayTodo.push({
              id: cnt,
              todoText: todoText,
              date: date,
              checked: false,
            });
            setCnt(cnt + 1);
          }
          setTodoText("");
        }}
      >
        Add
      </button>
      {arrayTodo.map((todo) => {
        return (
          <TaskList
            key={todo.id}
            todo={todo}
            removeTodo={removeTodo}
            className="task-list"
          />
        );
      })}
    </>
  );
}

import React from "react";
import PropTypes from 'prop-types';
import { TodoItem } from "./TodoItem";

const stylel = {
  ul : {
    backgroundColor: "red"
  }
};

function TodoList(props) {
  return (
    <div>
      <ul style={stylel.ul}>
        { props.todos.map((todo, index) => {
          return <TodoItem todo={todo} key={todo.id} index={index} ></TodoItem>
        }) }
      </ul>
    </div>
  );
}


TodoList.PropTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default TodoList
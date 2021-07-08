import React from "react";
import TodoList from "./Todo/TodoList";

function App() {
  const todos = [
    {id : 1, completed: false, title: "Купить хлеб"},
    {id : 2, completed: true, title: "Купить сыр"},
    {id : 3, completed: false, title: "Купить ustudy"}


  ]
  return (
      <div className="wrapper">
        <TodoList todos={todos}></TodoList>    
      </div>
    );
}

export default App;

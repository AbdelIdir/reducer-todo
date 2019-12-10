import React from "react";
import logo from "./logo.svg";
import "./App.css";
import uuid from "uuid";
function App() {
  const EmptyinitialStateTodoList = [
    { id: uuid(), task: "", completed: false }
  ];
  const todoList = [{ id: uuid(), task: "do some workout ", completed: false }];
  const initialSate = {
    todoList
  };

const MAKE_A_TODO_NOTE = "MAKE_A_TODO_NOTE";





  return (
    <div className="App">
      <header className="App-header">
        <form>
          <label>
            TODO LIST APP WITH REDUCER
            <input type="text" name="task" />
            <button>submit your task</button>
          </label>
        </form>
      </header>
    </div>
  );
}

export default App;

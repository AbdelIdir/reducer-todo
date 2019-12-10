import React, { useReducer } from "react";
import logo from "./logo.svg";
import "./App.css";
import uuid from "uuid";

const EmptyinitialStateTodoList = [{ id: uuid(), task: "", completed: false }];
const todoList = [{ id: uuid(), task: "do some workout ", completed: false }];
const initialSate = {
  todoList
};

const INPUT_CHANGE = "INPUT_CHANGE";

const SUBMIT_ADD_A_TODO_NOTE = "SUBMIT_ADD_A_TODO_NOTE";

const MARK_AS_COMPLETED_OR_NOT = "MARK_AS_COMPLETED_OR_NOT ";

const CLEAR_COMPLETED = "CLEAR_COMPLETED ";

function reducer(state, action) {
  switch (action.type) {
    case INPUT_CHANGE:
      return { ...state, [action.payload.name]: action.payload.value };
    case SUBMIT_ADD_A_TODO_NOTE:
      return 1 + 1;
    case MARK_AS_COMPLETED_OR_NOT:
      return "haha";
    case CLEAR_COMPLETED:
      return "hehe";
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialSate);

  const onvalueChange = event => {
    const { name, value } = event.target;

    dispatch({
      type: INPUT_CHANGE,
      payload: { name, value }
    });
  };

  const onFormSubmit = event => {
    event.preventDefault();
    dispatch({ type: SUBMIT_ADD_A_TODO_NOTE });
  };

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={onFormSubmit}>
          <label>
            TODO LIST APP WITH REDUCER
            <input
              type="text"
              name="task"
              value={state.task}
              onChange={onvalueChange}
            />
            <button>submit your task</button>
          </label>
        </form>
      </header>
    </div>
  );
}

export default App;

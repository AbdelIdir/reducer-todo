import React, { useReducer } from "react";
import "./App.css";
import uuid from "uuid";

const intialState = {
  todoList: [],
  task: ""
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
      return {
        ...state,
        task: "",
        todoList: [
          ...state.todoList,
          {
            task: action.payload,
            id: uuid(),
            completed: false
          }
        ]
      };

    case MARK_AS_COMPLETED_OR_NOT:
      return {
        ...state,

        todoList: [
          ...state.todoList.map(item => {
            if (item.id === action.payload) {
              return {
                ...item,
                completed: !item.completed
              };
            } else {
              return item;
            }
          })
        ]
      };

    case CLEAR_COMPLETED:
      return "hehe";
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, intialState);

  const onValueChange = event => {
    const { name, value } = event.target;

    dispatch({
      type: INPUT_CHANGE,
      payload: { name, value }
    });
  };

  const onFormSubmit = event => {
    event.preventDefault();
    dispatch({ type: SUBMIT_ADD_A_TODO_NOTE, payload: state.task });
  };

  const completedOrNot = id => {
    dispatch({ type: MARK_AS_COMPLETED_OR_NOT, payload: id });
  };

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={onFormSubmit}>
          <label>
            <p>TODO LIST APP WITH REDUCER</p>
            <input
              type="text"
              name="task"
              value={state.task}
              onChange={onValueChange}
            />
            <button>submit your task</button>
          </label>
        </form>
        <div className="todolist">
          <p>List of todos :</p>
          {state.todoList.map((todoTask, i) => {
            return (
              <p
                key={i}
                className={`task_not_complete${todoTask.completed &&
                  " task_complete"}`}
                onClick={() => completedOrNot(todoTask.id)}
              >
                {todoTask.task}
              </p>
            );
          })}
        </div>
      </header>
    </div>
  );
}

export default App;

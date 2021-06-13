import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddTodoAction, RemoveTodoAction } from "./actions/ToDoActions";

import "./index.css";

function App() {
  const [todo, setTodo] = useState();

  const dispatch = useDispatch();
  const Todo = useSelector((state) => state.Todo);
  const { todos } = Todo;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(AddTodoAction(todo));
  };

  const removeHandler = (t) => {
    dispatch(RemoveTodoAction(t));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>To Do List</h2>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Enter a ToDo"
            style={{
              width: 350,
              padding: 10,
              borderRadius: 20,
              border: "none",
              fontStyle: 20,
            }}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button
            type="submit"
            style={{
              padding: 12,
              borderRadius: 25,
              fontSize: 15,
              marginLeft: 20,
            }}
          >
            Go
          </button>
        </form>
        <ul className="allToDos">
          {todos &&
            todos.map((t) => (
              <li key={t.id} className="singleToDo">
                <span className="todoText">{t.todo}</span>
                <button
                  style={{
                    borderRadius: 25,
                    padding: 10,
                    border: "1px solid white",
                    color: "black",
                    backgroundColor: "orangered",
                  }}
                  onClick={() => removeHandler(t)}
                >
                  Delete
                </button>
              </li>
            ))}
        </ul>
      </header>
    </div>
  );
}

export default App;

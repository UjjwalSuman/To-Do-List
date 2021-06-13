import React from "react";

import "./index.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>To Do List</h2>
        <form>
          <input
            placeholder="Enter a ToDo"
            style={{
              width: 350,
              padding: 10,
              borderRadius: 20,
              border: "none",
              fontStyle: 20,
            }}
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
          <li className="singleToDo">
            <span className="todoText">First ToDo</span>
            <button
              style={{
                borderRadius: 25,
                padding: 10,
                border: "1px solid white",
                color: "black",
                backgroundColor: "orangered",
              }}
            >
              Delete
            </button>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default App;

import "./App.css";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import List from "./components/List/List";
import React, { useEffect, useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("todos")) {
      setTodos(JSON.parse(localStorage.getItem("todos")));
    }
  }, []);

  const addTodo = (text) => {
    setTodos([
      {
        id: Math.random(),
        title: text,
        isDone: false,
      },
      ...todos,
    ]);
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  return (
    <div className="container">
      <Header title="mejidza's Todo List" />
      <Form addTodo={addTodo} />
      <List todos={todos} />
    </div>
  );
}

export default App;

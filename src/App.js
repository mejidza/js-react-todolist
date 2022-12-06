import './App.css';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import List from "./components/List/List"
import React, { useState } from 'react'

function App() {
const [todos, setTodos] = useState([{
  id: 1, 
  title: "text",
  isDone: false
 }])

const addTodo = (text) => {
  setTodos([...todos, {
    id: Math.random(),
    title: text,
    isDone: false
  }])
}

  return (
    <div className="container">
     <Header title = "Todo List"/>
     <Form addTodo = {addTodo}/>
     <List todos = {todos}/>
    </div>
  );
}

export default App;

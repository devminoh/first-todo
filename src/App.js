import React, {useState, useEffect } from 'react';
import './App.css';
import Todo from './Todo';

const App = () => {

  const initialState = JSON.parse(localStorage.getItem("todo")) || [];
  const [input, setInput] = useState("")
  const [todo, setTodo] = useState(initialState);
  const [editTodo, setEditTodo] = useState(null);

  useEffect(()=>{
    localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo]);


  return (
    <div className="container">
        <main className="app-wrapper">
            {<Todo
              input={input}
              setInput={setInput}
              todo={todo}
              setTodo={setTodo}
              editTodo={editTodo}
              setEditTodo={setEditTodo} 
            />}
        </main>
    </div>
  );
}

export default App;

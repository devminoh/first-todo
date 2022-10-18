import React, {useState, useEffect } from 'react';
import './App.css';
import Todo from './Todo';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const App = () => {

  const initialState = JSON.parse(localStorage.getItem("todo")) || [];
  const [input, setInput] = useState("")
  const [todo, setTodo] = useState(initialState);
  const [editTodo, setEditTodo] = useState(null);
  const [value, setValue] = useState(new Date());

  console.log(value.getDate(), value.getMonth() + 1);

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
          <article className='datepicker'> 
            <DatePicker
              selected={value}
              onChange={(date) => setValue(date)}
              inline
            />
          </article>
        </main>
    </div>
  );
}

export default App;

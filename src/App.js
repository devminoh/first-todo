import React, {useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navs from './components/Nav';
import './App.css';
import Todo from './Todo';
import Home from './Home';

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
      <BrowserRouter>
        <main className="app-wrapper">
          <nav className="nav-wrap">
            <Navs />
          </nav>
          <Routes>
            <Route exact path = '/home' element={<Home />}></Route>
            <Route path = '/todo' element={<Todo
              input={input}
              setInput={setInput}
              todo={todo}
              setTodo={setTodo}
              editTodo={editTodo}
              setEditTodo={setEditTodo} 
            />}></Route>
            {/* <Todo
              input={input}
              setInput={setInput}
              todo={todo}
              setTodo={setTodo}
              editTodo={editTodo}
              setEditTodo={setEditTodo} 
            /> */}
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;

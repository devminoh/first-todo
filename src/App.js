import React, {useState } from 'react';
import './App.css';
import Todo from './Todo';
import DatePicker from "react-datepicker";
import useFetch from './util/useFetch';
import "react-datepicker/dist/react-datepicker.css";

const App = () => {
  const [todo, isPending, error] = useFetch("http://localhost:3001/todo/");
  // const initialState = JSON.parse(localStorage.getItem("todo") || []);
  const [title, setTitle] = useState("")
  // const [todo, setTodo] = useState([]);
  const [editTodo, setEditTodo] = useState(null);
  const [value, setValue] = useState(new Date());

  console.log(value.getDate(), value.getMonth() + 1);
  console.log(todo)
  // useEffect(()=>{
  //   // localStorage.setItem("todo", JSON.stringify(todo));
  // }, []);


  return (
    <div className="container">
      { error && <div>{ error }</div> }
        <main className="app-wrapper">
            {<Todo
              title={title}
              setTitle={setTitle}
              todo={todo}
              // setTodo={setTodo}
              isPending={isPending}
              editTodo={editTodo}
              setEditTodo={setEditTodo} 
              value = {value}
              setValue = {setValue}
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

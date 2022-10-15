import React from 'react';
import Header from './components/Header';
import TodoList from './components/TodoList';
import Form from './components/Form';
import DatePicker from './components/Date';

const Todo = ({input, setInput, todo, setTodo, editTodo, setEditTodo})=>{
    return (
        <div className="todo">
          <article className='todo-content'>
            <div>
              <Header />
            </div>
            <div>
              <Form 
                input={input}
                setInput={setInput}
                todo={todo}
                setTodo={setTodo}
                editTodo={editTodo}
                setEditTodo={setEditTodo}
              />
            </div>
            <div>
              <TodoList 
              input={input}
              setInput={setInput}
              todo={todo}
              setTodo={setTodo}
              editTodo={editTodo}
              setEditTodo={setEditTodo}
              />
            </div>
          </article>
            <div>
             <DatePicker />
            </div>
        </div>
    )
}

export default Todo;
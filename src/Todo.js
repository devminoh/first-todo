import React from 'react';
import Header from './components/Header';
import TodoList from './components/TodoList';
import Form from './components/Form';
//import DatePicker from './components/Date';

const Todo = ({input, setInput, todo, setTodo, editTodo, setEditTodo})=>{
      const todayTime = ()=>{
        let now = new Date();
        let todayYear = now.getFullYear();
        let todayMonth = now.getMonth() + 1;
        let todayDate = now.getDate();
        const week = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
        let dayOfWeek = week[now.getDay()];

        return `${todayYear}.${todayMonth}.${todayDate} ${dayOfWeek}`;
    }
    return (
        <div className="todo">
          <article className='todo-content'>
            <div>
              <Header todayTime={todayTime} />
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
            {/* <div>
             <DatePicker />
            </div> */}
        </div>
    )
}

export default Todo;
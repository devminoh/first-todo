import React from 'react';
import Header from './components/Header';
import TodoList from './components/TodoList';
import Form from './components/Form';
//import DatePicker from './components/Date';

const Todo = ({title, setTitle, todo, editTodo, setEditTodo, value, setValue})=>{
      const todayTime = ()=>{
        let now = new Date();
        let todayYear = now.getFullYear();
        let todayMonth = now.getMonth() + 1;
        let todayDate = now.getDate();
        const week = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
        let dayOfWeek = week[now.getDay()];

        return `${todayYear}.${todayMonth}.${todayDate} ${dayOfWeek}`;
    }
    //let uncomplete = todo.filter(one=> !one.completed)
    return (
        <div className="todo">
          <article className='todo-content'>
            <div>
              <Header todayTime={todayTime} />
            </div>
            <div>
              <Form 
                title={title}
                setTitle={setTitle}
                todo={todo}
                // setTodo={setTodo}
                editTodo={editTodo}
                setEditTodo={setEditTodo}
                value = {value}
                setValue= {setValue}
              />
            </div>
            {/* <div className='uncompleted'>할 일 {uncomplete.length} 개 남음</div> */}
            <div>
              <TodoList 
              title={title}
              setTitle={setTitle}
              todo={todo}
              // setTodo={setTodo}
              editTodo={editTodo}
              setEditTodo={setEditTodo}
              value = {value}
              setValue= {setValue}
              />
            </div>
          </article>
        </div>
    )
}

export default Todo;
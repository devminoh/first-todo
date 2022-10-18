import React from "react";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { faCircleMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TodoList = ({todo, setTodo, setEditTodo, value, setValue})=>{
    const handleComplete = (onetodo)=>{
        setTodo(
            todo.map((item) => {
                if(item.id === onetodo.id){
                    return { ...item, completed: !item.completed};
                }
                return item;
            })
        )
    }

    const handleEdit = ({id})=>{
        const findTodo = todo.find((onetodo)=>onetodo.id === id);
        setEditTodo(findTodo);
    }

    const handleDelete = ({ id }) => {
        setTodo(todo.filter((todo)=>todo.id !== id));
    };

    const selectedDateData = todo.filter(
        onetodo => onetodo.day === value.getDate() && onetodo.month === value.getMonth() + 1
      )
    
    return(
        <div>
           {selectedDateData.map((todo)=>(
            <li className="list-item" key={todo.id}>
                <button className="button-complete task-button" onClick={()=> handleComplete(todo)}>
                    <FontAwesomeIcon icon={todo.completed ? faCheckCircle : faCircle} />
                </button>
                <input 
                type="text" 
                value={todo.title} 
                className={`list ${todo.completed ? "complete" : ""}`}
                onChange={(e)=> e.preventDefault()}
                />
                <div className="buttons">
                    <button className="button-edit task-button" onClick={()=>handleEdit(todo)}>
                    <FontAwesomeIcon icon={faEdit} />
                    </button>
                    <button className="button-delete task-button" onClick={()=>handleDelete(todo)}>
                    <FontAwesomeIcon icon={faCircleMinus} />
                    </button>
                </div>
            </li>
           ))}
        </div>
    )
}
export default TodoList;
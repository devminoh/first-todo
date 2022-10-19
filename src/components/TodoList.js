import React, {useState} from "react";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { faCircleMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fetchDelete } from "../util/api";
import { fetchPatch } from '../util/api';

const TodoList = ({todo, setEditTodo, value})=>{
    const [completed, setCompleted] = useState(false)

    const handleComplete = (todo)=>{
        fetch(`http://localhost:3001/todo/${todo.id}`,{
            method: 'PUT',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
                ...todo, completed: !todo.completed
            })
        }).then(res=>{
            if(res.ok){
                setCompleted(!completed)
            }
        }).then(()=>{
            window.location.href = 'http://localhost:3000/'
        }).catch((error)=>{
            console.error("Error", error);
        })
    }

    const handleEdit = ({id})=>{
        const findTodo = todo.find((onetodo)=>onetodo.id === id);
        fetchPatch(`http://localhost:3001/todo/${todo.id}`, id, setEditTodo(findTodo))
        // setEditTodo(findTodo);
    }

    const handleDelete = ({id}) => {
        // todo.filter((todo)=>todo.id !== id);
        fetchDelete(`http://localhost:3001/todo/`, id);
    };

    const selectedDateData = todo.filter(
        onetodo => onetodo.day === value.getDate() && onetodo.month === value.getMonth() + 1
      )
    console.log(selectedDateData)
    return(
        <div>
           {selectedDateData.map((onetodo)=>(
            <li className="list-item" key={onetodo.id}>
                <button className="button-complete task-button" onClick={()=> handleComplete(onetodo)}>
                    <FontAwesomeIcon icon={onetodo.completed ? faCheckCircle : faCircle} />
                </button>
                <input 
                type="text" 
                value={onetodo.title} 
                className={`list ${onetodo.completed ? "complete" : ""}`}
                onChange={(e)=> e.preventDefault()}
                />
                <div className="buttons">
                    <button className="button-edit task-button" onClick={()=>handleEdit(onetodo)}>
                    <FontAwesomeIcon icon={faEdit} />
                    </button>
                    <button className="button-delete task-button" onClick={()=>handleDelete(onetodo)}>
                    <FontAwesomeIcon icon={faCircleMinus} />
                    </button>
                </div>
            </li>
           ))}
        </div>
    )
}
export default TodoList;
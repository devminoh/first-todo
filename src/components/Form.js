import React, {useEffect, useState} from 'react';
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fetchCreate } from "../util/api";
// import useInput from '../util/useInput';

const Form = ({title, setTitle, todo, editTodo, setEditTodo})=>{
    const [completed, setCompleted] = useState(false);
    const day = (new Date().getDate());
    const month = (new Date().getMonth() + 1);

    const updateTodo = (title, id, completed, day, month)=>{
        const data = {title, completed, day, month};
        const newTodo = todo.map((onetodo) => 
           onetodo.id === id ? data : onetodo
        );
        fetchCreate("http://localhost:3001/todo/", newTodo)
        // setTodo(newTodo)
        setEditTodo("");
    }
    useEffect(()=>{
        if(editTodo){
            setTitle(editTodo.title);
        }else{
            setTitle("")
        }
    }, [setTitle, editTodo]);

    const onInputChange = (e)=>{
        setTitle(e.target.value);
    }
    const onFormSubmit = (e)=>{
        e.preventDefault();
        const data = {title, completed, day, month};
        fetchCreate("http://localhost:3001/todo/", (!editTodo) ? data :updateTodo(title, editTodo.id, editTodo.completed, editTodo.day, editTodo.month))
        // if(!editTodo){
        //     // setTodo([...todo, {id: uuidV4(), title: input, completed: false, day: value.getDate(), month: value.getMonth() + 1}]);
        //     setInput("");
        // }else{
        //     updateTodo(input, editTodo.id, editTodo.completed)
        // }
    }
    return (
       <form className='input-form' onSubmit={onFormSubmit}>
            <input 
            type="text" 
            placeholder='할 일을 적어주세요!' 
            className='task-input'
            value={title}
            required
            onChange={onInputChange}
            />
            <button className='button-add' type='submit'>
                <FontAwesomeIcon icon= {editTodo ? faEdit : faPaperPlane}/>
            </button>
       </form>
    )
}

export default Form;
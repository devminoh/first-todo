import React, {useEffect} from 'react';
import {v4 as uuidV4} from "uuid";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Form = ({input, setInput, todo, setTodo, editTodo, setEditTodo, value, setValue})=>{

    const updateTodo = (title, id, completed, day, month)=>{
        const newTodo = todo.map((onetodo) => 
           onetodo.id === id ? { title, id, completed, day, month } : onetodo
        );
        setTodo(newTodo);
        setEditTodo("");
    }
    useEffect(()=>{
        if(editTodo){
            setInput(editTodo.title);
        }else{
            setInput("")
        }
    }, [setInput, editTodo]);

    const onInputChange = (e)=>{
        setInput(e.target.value);
    }
    const onFormSubmit = (e)=>{
        e.preventDefault();
        if(!editTodo){
            setTodo([...todo, {id: uuidV4(), title: input, completed: false, day: value.getDate(), month: value.getMonth() + 1}]);
            setInput("");
        }else{
            updateTodo(input, editTodo.id, editTodo.completed)
        }
    }
    return (
       <form className='input-form' onSubmit={onFormSubmit}>
            <input 
            type="text" 
            placeholder='할 일을 적어주세요!' 
            className='task-input'
            value={input}
            required
            onChange={onInputChange}/>
            <button className='button-add' type='submit'>
                <FontAwesomeIcon icon= {editTodo ? faEdit : faPaperPlane}/>
            </button>
       </form>
    )
}

export default Form;
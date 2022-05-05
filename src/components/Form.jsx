import React, { useState } from 'react';
import './Form.css';

function Form() {
    const [listItem, setListItem] = useState('')
    const [todos,setToDos] = useState([])
   
    function addItem(e) {
        e.preventDefault()
        setToDos(oldtodos => {
            setListItem('')
            return [...oldtodos,listItem]
        })
    }

    function deleteItem(index) {
        setToDos(oldtodos => {
            return (
                oldtodos.filter((_,i) => i !== index)
            )
        })
    }


    return (
        <>
        <form className='Form' onSubmit={addItem}>
            <input type="text" value={listItem} onChange={e=>setListItem(e.target.value)} className="input-text" placeholder='Enter list item'/>
            <input type='submit' className="input-submit" value="Add"/>
        </form>
        <ul className='List'>
            {todos.map((todo,index) => {
                return (
                    <li key={index}>
                    {todo}
                    <button onClick={()=>deleteItem(index)}>Delete</button>
                    </li>                
                )
            })}        
        </ul>
        </>
        
    );
}

export default Form;
import React, { useState } from 'react';
import './Form.css';

function Form() {
    const [listItem, setListItem] = useState('')
    const [todos,setToDos] = useState([])
   
    function addItem() {
        setToDos(oldtodos => [...oldtodos,listItem])
    }
    
    return (
        <>
        <div className='Form'>
            <input type="text" value={listItem} onChange={e=>setListItem(e.target.value)} className="input-text" name="list-item" placeholder='Enter list item'/>
            <button className="input-submit" onClick={addItem}>Add</button>
        </div>
        <ul className='List'>
            {todos.map(todo => {
                return (
                    <li>{todo}</li>
                )
            })}
        </ul>
        </>
        
    );
}

export default Form;
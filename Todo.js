import React from 'react'

function Todo(props) {
    return (
        <li className='item-list'>
            {props.item}
            <span className='icons'>  <i class="fa-solid fa-trash-can  icon-delete " 
            onClick={a => {
                props.deleteItem(props.index)
             }}></i> 
             </span>

        </li>
    )
}

export default Todo
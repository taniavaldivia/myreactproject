import React from 'react';
import './TodoItem.css';

// Esto fue lo que cambie con Bob:
function TodoItem(props) {
    const activeIcon = props.completed ? 'Icon-check--active' : '';
    const completedIcon = props.completed ? 'TodoItem-p--completed' : '';

    return (
        <li className='TodoItem'>
            <span 
                className={`Icon Icon-check ${activeIcon}`}
                onClick={props.onComplete}
            > 
                √ 
            </span> 
            <p className={`TodoItem-p ${completedIcon}`}>{props.text}</p>
            <span 
                className="Icon Icon-delete"
                onClick={props.onDelete}  
            > 
                X
            </span>
        </li>
    );
}

export { TodoItem };
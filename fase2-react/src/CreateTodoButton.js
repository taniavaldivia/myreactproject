import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton(props) {
    // Se le pone propiedad de msg para poder reutilizar esta función en distintos componentessss
    const onClickButton = (msg) => {
        alert(msg)
    }

    return (
        <button 
            className='CreateTodoButton'
            // Si nada más tuviera un par de paréntesis, la función se ejecutaría cuando quisiera. 
            // Se le agregan los del principio para volver la función de OnClickButton en una arrow function
            // y que se ejecute cuando se necesite solamente..
            onClick={() => onClickButton('Aquí se debería de abrir el modal')}
        > 
            + 
        </button>
    );
}

export { CreateTodoButton };
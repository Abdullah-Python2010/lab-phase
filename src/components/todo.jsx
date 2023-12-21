import { Check } from './checking';
import { useState } from 'react'
//  Main Todo component

export const Todo = ({ content, onDel, onToggle}) => {

    const [check, setCheck] = useState(false)
    return(

        <div className="todo">

            
            <Check bool={check} onClick={() => 
                {
                    setCheck(!check)
                    onToggle()
                }
                
                } />
            {/* Icon tag for the completed toggle */}

            {/* Todo Text */}
            <h2> {content} </h2>

            {/* Button to delete a todo item */}
            <button className="btn" onClick={onDel} >
                <i class="fa-solid fa-trash-can"></i>
            </button>
            
        </div>
    )
}

Todo.defaultProps = {
    checked: true,
}
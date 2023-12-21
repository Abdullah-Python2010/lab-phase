import { Todo }  from './todo';
import { useState } from 'react';




export const List = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');

    const addTodo = () => {
        if (newTodo.trim() !== '') {
            setTodos([...todos, { text: newTodo, completed: true }]);
            setNewTodo('');
        }
    };
    const deleteTodo = (index) => {
        const updatedTodos = [...todos];
        updatedTodos.splice(index, 1);
        setTodos(updatedTodos);
    };
    const toggleTodo = (index) => {
        const updatedTodos = [...todos];
        updatedTodos[index].completed = !updatedTodos[index].completed;
        setTodos(updatedTodos);
    };
    


    return(
        <div className='container'>
            <div className='input'>
                <input
                    value={newTodo}
                    type='text'
                    placeholder='Enter your todo'
                    onChange={ e=> setNewTodo( e.target.value) }
                />
                <button 
                    className='add' 
                    onClick={ () => addTodo()}
                >Add</button>
            </div>
            
            <div className='todos'>
                {
                    todos.map(
                        (todo, index) => {
                            return(
                                <Todo content={todo.text} onDel={ () => deleteTodo(index)} onToggle={ () => toggleTodo(index)} />
                            )
                        }
                    )
                }
            </div>                
            
            

            
        </div>
    )
}


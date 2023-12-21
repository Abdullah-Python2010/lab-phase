
import { Todo } from './todo';
import { useState } from 'react';

export const List = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo('');
    }
    else{
        alert('Please fill in the input before adding')
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

  const filterTodos = () => {
    const filtered = todos.filter( (item)=>{return item.completed === false});
    const rem =  todos.filter( (item)=>{return item.completed === true});
    setTodos(...filtered, ...rem);
  }



  return (
    <div className="container">
      <div className="input">
        <input
          value={newTodo}
          type="text"
          placeholder="Enter your todo"
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button className="add" type="button" onClick={() => addTodo()}>
          Add
        </button>

        <button className='fil' onClick={ () => filterTodos() }>Filter</button>
      </div>


    
      <div className="todos">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            content={todo.text}
            completed={todo.completed}
            onDel={() => deleteTodo(index)}
            onToggle={() => toggleTodo(index)}
          />
        ))}
      </div>


    </div>
  );
};



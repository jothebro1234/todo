import React, {useState} from 'react'

const App = () => {

  const [list, setList] = useState([]);
  const [input, setInput] = useState("");
  const addTodo = (todo) => {
    const newTodo = {
      id: Math.random(),
      todo: todo,
    }
  
    setList([...list, newTodo]);
    setInput("");
  };

  const deleteTodo = (id) => {
    const newList = list.filter((todo) => todo.id !== id);
    setList(newList);

  };

  return (
  
  
  <div className='container'>
      <h1 className='title'>Focus.</h1>
      <input 
        type="text" 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
      />
      <button className='add_button' onClick={() => addTodo(input)}>Add</button>

      <ul>
        {list.map((todo) => (
          <li className='task' key={todo.id}>
            {todo.todo}
            <button className='delete_button' onClick={() => deleteTodo(todo.id)}>X</button>
          </li>
        ))}
      </ul>



    </div>


  );
}

export default App
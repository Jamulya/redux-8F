import { useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteTodo, addTodo, doDone, doImportant } from './redux/redusers/todo';

function App() {
const dispatch = useDispatch()
const todos = useSelector((store) => store.todos.todos)


const [todo, setTodo] = useState('')



  return (
    <div className="App">
        <div>
          <input onChange={(e) => setTodo(e.target.value)} value={todo} type="text" />
          <button  type='button' onClick={() => {dispatch(addTodo(todo))
          setTodo('')
          }}>Add</button>

          {
            todos.map((item) => (
              <li key={item.id} style={{marginLeft: '10px 0', color: item.isImportant ? 'red' : '', textDecoration: item.isDone ? 'line-through': ''}}>{item.title}

              <button style={{margin: '0 50px'}} type='button' onClick={() => dispatch(DeleteTodo(item.id))}>Delete</button>

              <button type='button' onClick={() => dispatch(doImportant(item.id))}>Important</button>
              <button type='button' onClick={()=> dispatch(doDone(item.id))}>Done</button>

              </li>
            ))
          }
        </div>
    </div>
  );
}

export default App;

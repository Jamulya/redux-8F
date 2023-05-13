import { useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteTodo, addTodo, doDone, doImportant, editTodo } from './redux/redusers/todo';

function App() {
const dispatch = useDispatch()
const todos = useSelector((store) => store.todos.todos)


const [todo, setTodo] = useState('')
const [value, setValue] = useState('')
const [search, setSearch] = useState('')


  return (
    <div className="App">
        <div>
          <input onChange={(e) => setTodo(e.target.value)} value={todo} type="text" />
          <button  type='button' onClick={() => {dispatch(addTodo(todo))
          setTodo('')
          }}>Add</button>
<ul>

          {
            todos.filter(item => item.title.toLowerCase().includes(search.toLowerCase())).map((item) => (
              <li key={item.id} style={{marginLeft: '10px 0', color: item.isImportant ? 'red' : '', textDecoration: item.isDone ? 'line-through': ''}}>
                {item.change ? <input onChange={(e)=> setValue(e.target.value)} defaultValue={item.title} type='text'/> : item.title}

              <button style={{margin: '0 50px'}} type='button' onClick={() => dispatch(DeleteTodo(item.id))}>Delete</button>

              <button type='button' onClick={() => dispatch(doImportant(item.id))}>Important</button>
              <button type='button' onClick={()=> dispatch(doDone(item.id))}>Done</button>
              <button type='button' onClick={() => {dispatch(editTodo(item.id, value, item.change))
              if(item.change){
                setValue('')
              }else{
                setValue(item.value)
              }
              }}>
                {item.change ? 'save' : 'edit'}
              </button>
              </li>
            ))
          }
</ul>
          <div>
            <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" />
            <button>search</button>
          </div>
        </div>
    </div>
  );
}

export default App;

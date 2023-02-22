
import './App.css';
import {useState} from 'react'
//import ReactDOM from 'react-dom/client';
//import addName from './addName'
function App() {
  let [name,setName]=useState('')
  const [Item,setItem]=useState([])
  const addTask=()=>{
    setItem((oldData)=>{
      return [...oldData,name]
    });
    setName("");
  }

  return (
    <div>
    <h1>Todo App</h1>
    <label>Name : </label>
<input className='search' placeholder="search for" onChange={(e)=>setName(e.target.value)}></input>
<button onClick={addTask} >submit</button>
<ol>
   {Item.map((itemName)=>
   {
    return <li>{itemName}</li>
   })}
</ol> 
 
    </div>
  );
}

export default App;

import logo from './logo.svg';
import React,{useState} from 'react';
import './App.css';
import Counter from './components/Counter';


const App=()=>{
  
  const [count,setCount] = useState(0);
  
  const addCount = () =>{
    setCount(count+1);
  }
  return(
    <div className="App"> 
    <button onClick={addCount} >Add</button>
    <Counter count = {count}/>
    </div>
  )

}

  
export default App;

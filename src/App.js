
import React,{useState,useRef,useEffect} from 'react';
import './App.css';
import Button from './components/Button';
// import Counter from  './components/Counter';
// import PropsExample from './components/PropsExample';
// import Greeting from './components/Greeting';
// import Button from './components/Button';
// import Condition from './components/Condition';


// const App=()=>{
  
//   const [count,setCount] = useState(0);
  
//   const addCount = () =>{
//     setCount(count+1);
//   }
//   return(
//     <div className="App"> 
//     <button onClick={addCount} >Add</button>
//     <Counter count = {count}/>
//     </div>
//   )

// } 


// const App=()=>{
//   const [state , setState]=useState(false);
//   return(

//     <div className='App'> 
//     <h1 onClick={() =>setState(!state)}>Show / Hide</h1>
    
//    { state ? <Counter/> : null}
//      </div>

//   );
// }




// const App=() =>{

//   // const [count,setCount] = useState(0);
//   return (
    
//     // <button onClick={()=>setCount(count+1)} >click me to increment :{count}</button>
 
//     <HandleClick/>
//   )

// }

//    function HandleClick(){

//   const [count,setCount] = useState(0);

//  return <button onClick={()=>setCount(count+1)}>count : {count} </button>
// }





  
 





// const App = ()=>{

//   const  people = {
//    person1: { name: "Suhail", age: 23, place: "Malabar" },
//     person2:{ name: "John", age: 30, place: "New York" },
//     person3:{ name: "Ayesha", age: 28, place: "Dubai" },
//     // Add more person objects as needed (up to 100)
//   };
//   return(

//     <div>

//       <h1>person information</h1>
//       {
//        Object.keys(people).map((key)=>
//         (
//           <PropsExample 
//           key = {key}
//           name = {people[key].name}
//           age= {people[key].age}
//           place ={people[key].age}
//           />
//         )

//         )
//       }

//     </div>

//   )

// }














// const App = ()=>{

//   const name = "suhail";
//   const age = 25;

//   return(
//     <div>
//       <Greeting name = {name} age= {age}/>

//     </div>
//   )


// }







// const App = () => {
//   const handleClick = () => {
//     alert('Button clicked!');
//   };

//   return (
//     <div>
//       <h1>Click the button below:</h1>
//       {/* Passing the handleClick function as a prop */}
//       <Button onClick={handleClick} />
//     </div>
//   );
// };




// const App =()=>{

//   const person = [
//     {name : "suhail", age:23,place:"malabar"},
//     {name : "shefeek", age:22,place:"malabar"},
//     {name : "hisham", age:24,place:"malabar"},
//     {name : "sinan", age:16,place:"malabar"},

//   ]

  
//   return(
//     <div>

//       <Condition person={person}/>
//     </div>
//   )
// }


// function App() {
//   const [isDarkTheme, setIsDarkTheme] = useState(false);

//   const toggleTheme = () => {
//     setIsDarkTheme(fasil => !fasil);
//   };

//   return (
//     <div className={isDarkTheme ? 'dark-theme' : 'light-theme'}>
//       <button onClick={toggleTheme}>Switch Theme</button>
//     </div>
//   );
// }





// const App = ()=>{
//   const people = [
//     'Creola Katherine Johnson: mathematician',
//     'Mario José Molina-Pasquel Henríquez: chemist',
//     'Mohammad Abdus Salam: physicist',
//     'Percy Lavon Julian: chemist',
//     'Subrahmanyan Chandrasekhar: astrophysicist'
//   ];
 
//   const filtered =people.filter(
//     (item, index)=>  index >2)
//   .map((item , index)=><li>{item}</li> );

//   return <ul>

//     {filtered}
     
//   </ul> 
// }


// const App=() =>{


//   const ClidckHandler = (evt) =>{
//     console.log("im clicked",evt.target);
//   }

//   return(
//     <button onClick={ClidckHandler}>click here 1</button>
//   )
// }



// const App =()=>{
//   const inputRef = useRef(null);

//   const handleClick =()=>{
//     inputRef.current.focus();
//   }


//   return(
//     <div>
//       <input ref={inputRef} type="text" placeholder='Typing something.....' />
      
//       <button 
//       onClick={handleClick}
//       >
//       click me to focus</button>
//     </div>
//   )
//   };


// const App = () =>{

//   const [number, setNumber] = useState(0);

//   return (
//     <>
//       {/* <h1>{number}</h1>
//       <button onClick={() => {

//         setNumber(number + 1);
//         setNumber(number + 1);
//         setNumber(number + 1);

//       }}>+3</button> */}
//        <>
//       <h1>{number}</h1>
//       <button onClick={() => {
//         setNumber(number + 5);
//         setTimeout(() => {
//           alert(number);
//         }, 3000);
//       }}>+5</button>
//     </>
//     </>
//   )
// }





//useREf example

// const App =()=>{
  
//   const countRef = useRef(0); // Initialize the reference for the count
//   const [renderCount, setRenderCount] = useState(0);

//   const incrementCount = () => {
//     countRef.current += 1; // Update ref value without re-rendering
//     console.log('Current Count:', countRef.current);
//   };

//   return (
//     <div>
//       <p>1st button : {countRef.current}</p>
//       <button onClick={incrementCount}>Increment Count (Ref)</button>
//       <button onClick={() => setRenderCount(renderCount + 1)}>
//         Re-render Component
//       </button>
//       <p>2nd button Render Count: {renderCount}</p>
//     </div>
//   );
// };








//stop watch



// const App = () =>{

//   const [startTime, setStartTime] = useState(null);
//   const [now, setNow] = useState(null);
//   const intervalRef = useRef(null);

//   function handleStart() {
//     setStartTime(Date.now());
//     setNow(Date.now());

//     clearInterval(intervalRef.current);
//     intervalRef.current = setInterval(() => {
//       setNow(Date.now());
//     }, 10);
//   }

//   function handleStop() {
//     clearInterval(intervalRef.current);
//   }

//   let secondsPassed = 0;
//   if (startTime != null && now != null) {
//     secondsPassed = (now - startTime) / 1000;
//   }

//   return (
//     <>
//       <h1>Time passed: {secondsPassed.toFixed(3)}</h1>
//       <button onClick={handleStart}>
//         Start
//       </button>
//       <button onClick={handleStop}>
//         Stop
//       </button>
//     </>
//   );
// }


//todo 
function App() {

  const [list,listingDown] = useState([]);
  const [todo,setToDo] = useState('');
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1> 
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={todo}  onChange={(e)=>setToDo(e.target.value)}  type="text" placeholder="🖊️ Add item..." />
        <i onClick={() =>listingDown([...list,{id : Date.now(), text :todo, status :false}])} className="fas fa-plus"></i>
        
      </div>  
      <div className="todos">
        {list.map((value)=>{
          return(
          <div className="todo">
          <div className="left">
            <input
            onChange={(e)=>{

              listingDown(list.filter(obj =>{
                if(obj.id === value.id)
                   {obj.status = e.target.checked;}
                return obj;
                
              }))


             
               

            }} 
             value={value.status} type="checkbox" name="" id="" />
            <p>{value.text}</p>
          </div>
          <div className="right">
            <i className="fas fa-times"></i>
          </div>
        </div>
          )
        })
        }

        {list.map((obj)=>{
          if(obj.status){
            return(<h1>{obj.text}</h1>)
          }
          return null;
        })}
      </div>
    </div>
  );
}





//useEffect






// const App = () => {
//   const [count, setCount] = useState(0); // Use state to track count

//   function increment() {
//     setCount(count + 1); // Update count using setCount
//   }

//   useEffect(() => {
//     // You can do something when count changes, if needed.
//     console.log('Count has been updated:', count);
//   }, [count]); // Add count as a dependency

//   return (
//     <div>
//       <button onClick={increment}>Increment count</button>
//       <h1>Count: {count}</h1>
//     </div>
//   );
// };



  




  // function TestuseEffect(){

  //   const [windowWidth,setWindowWidth] = useState(window.innerWidth)

  //  const handleResize = () =>{
  //   setWindowWidth(window.innerWidth)
  //  }
  // useEffect(()=>{

  //   window.addEventListener('resize',handleResize)

  // },[])

    
  //   return(

  //     <div>{windowWidth}</div>

  //   )
  // }






// function TestuseEffect(){
//   const [resourceType,setResourceType] = useState('posts')
//   const [items, setItems] = useState([]);

//   {console.log("component rendering ....")}

//   // useEffect(()=>{
//   //   console.log("useEffect rendering")
//   // },[])

//   useEffect(()=>{
//     fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
//     .then(response => response.json())
//     .then(item => setItems(item));
//   },[resourceType])



//   return(
//     <>
    
//      <div>
//       <button onClick={()=>setResourceType('posts')}>posts</button>
//       <button onClick={()=>setResourceType('users')}>users</button>
//       <button onClick={()=>setResourceType('comments')}>comments</button>
//      </div>
//      <h1>{resourceType}</h1>

//      {items.map(items =>{
//       return <pre>{JSON.stringify(items)}</pre>
//      })}

    
//     </>
//   )
// }









// const ChangeTitle = () => {
//   useEffect(() => {
//     document.title = 'New Title!';
//   }, []); // Only run once when the component mounts

//   return <div>Check your browser tab title!</div>;
// };











export default App;
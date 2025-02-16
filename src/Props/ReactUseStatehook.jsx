// import React, { useState } from 'react'

// const ReactUseStatehook = () => {
//    const [count,setCount]= useState(0);
//    const [data,setData]= useState("")

    
// //    console.log(setCount)
// function increment(){
//     // setCount(count+1)
//     // setCount(count+1)
//     // setCount(count+1)
//     setCount((prevC)=>prevC+1)
//     setCount((prevC)=>prevC+1)
//     setCount((prevC)=>prevC+1)

// }
// function decrement(){
//     setCount(count-1)
// }
// function reset(){
//     setCount(0)
// }
// function handleChange(event){
// setData(event.target.value)
// }
//   return (
//     <>
//     <h1>REACT USESTATE HOOK</h1>
//     <h2>FAHAD CLICKED {count} TIMES</h2>
//     <button onClick={increment}>INCREMENT</button>
//     <button onClick={decrement}>DECREMENT</button>
//     <button onClick={reset}>RESET</button>
// {/* 
//     <button onClick={()=>{setCount(count+1)}}>INC</button>
//     <button onClick={()=>{setCount(count-1)}}>DEC</button>
//     <button onClick={()=>{setCount(0)}}>RESET</button> */}

//     <hr />
//     <input type="text" onChange={handleChange}/>
//     <h2>USERNAME: {data}</h2>
//     <input type="text" onChange={handleChange}/>
//     <h2>PASSWORD: {data}</h2>

//     </>
//   )
// }

// export default ReactUseStatehook

import React, { useState } from 'react';

// Child Component
const ChildComponent = ({ username, password }) => {
  return (
    <div>
      <h3>Child Component</h3>
      <p>Username (from parent): {username}</p>
      <p>Password (from parent): {password}</p>
    </div>
  );
};
// Parent Component
const ReactUseStatehook = () => {
  // State for username and password
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Handler for username change
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  // Handler for password change
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <>
      <h1>React UseState Hook</h1>

      <div>
        <label>Username: </label>
        <input type="text" onChange={handleUsernameChange} value={username} />
      </div>

      <div>
        <label>Password: </label>
        <input type="password" onChange={handlePasswordChange} value={password} />
      </div>

      <h2>Entered Username: {username}</h2>
      <h2>Entered Password: {password}</h2>

      {/* Passing username and password to ChildComponent */}
      <ChildComponent username={username} password={password} />
    </>
  );
};

export default ReactUseStatehook;

// import React, { useState } from 'react'

// const ReactUseStatehook = () => {
// //  const[data,setData]= useState()
// //  const[color,setColor]=useState("YELLOW")
// //  const [input,setInput]=useState({name:"Ramesh",course:"React"})
// //  console.log(data)
// const [fruits,setFruits]=useState(["STRAWBERRY","APPLE","KIWI","BANANA","ORANGE","CHERRY"])
// const [input,setInput]=useState("")
// const [binList, setBinList] = useState([]);

// function addNewFruits(){
//   let myFruits=[...fruits,input]
//   setFruits(myFruits)
//   setInput("")
// }
// function delete_fruit(index){
// console.log(index)
//   let myfruits1=[...fruits];
//   myfruits1.splice(index,1)
//   setFruits(myfruits1) 
// }
// const binName = (index) => {
//   const nameToBin = input[index];
//   setBinList([...binList, nameToBin]);
//   removeName(index);
// };
//   return (
//     <>
//     <center>
//       {/* <input type="text" placeholder='Fav color' onChange={(event)=>{setData(event.target.value)}} />
//       <h1>MY FAV COLOR :{data}</h1>
//       <h2 style={{backgroundColor:color}}>TOGGLE BACKGROUND COLOUR</h2>
//       <button onClick={()=>{setColor(color==="YELLOW"?"TOMATO":"YELLOW")}}>Click me</button>
//       <hr />
//       <h1>FIRSTNAME :{input.name}</h1>
//       <input type="text" onChange={(event)=>{setInput({...input,name:event.target.value})}}/>
//       <h1>COURSE :{input.course}</h1>
//       <input type="text" onChange={(event)=>{setInput({...input,course:event.target.value})}} /> */}
//       <input 
//       type="text" 
//       placeholder='NEW FRUITS...'  
//       onChange={(e)=>{setInput(e.target.value)}} 
//       value={input}/>
//       <button onClick={addNewFruits}>ADD FRUITS</button>
      
//       <ul>
//         FRUITS LIST
//         {fruits.map((item,index)=>{
//           return <li 
//           key={index}>{item} 
//   <button onClick={()=>delete_fruit(index)}>Delete Fruit</button>
//   <button onClick={() => binName(index)}>Bin</button>
//   </li>
//         })}
//       </ul>

//       <h2>Bin List</h2>
//       <ul>
//         {binList.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>
//     </center>
//     </>
//   )
// }

// export default ReactUseStatehook
import React, { useReducer, useState } from 'react'

const UseReducer = () => {
   let [col,setColor] =useState("Green")
   let intialization={count:0,username:"Arun",address:"Tambaram"}
   function reducer(state,action){
//const{type,payload}=action
switch (action.type) {
   
  case "Increment":
    return {count:state.count+1}
  case "Decrement":
    return {count:state.count-1}
    case "Reset":
      return{count:action.payload}
    case "uname":
      return{...state,username:action.payload}
    case "address":
      return{...state,address:action.payload}
    

  default:
    
}

   }
  let [state,disPatch]= useReducer(reducer,intialization);
  //console.log(state)
  return (
    <>
    <center>
        <h1 style={{backgroundColor:col}}>USE REDUCER HOOKS</h1>
        <button onClick={()=>{setColor("RED")}}>Click me</button>
        <hr />
        <h1>COUNTER :{state.count}</h1>
        <button onClick={()=>{disPatch({type:"Increment"})}}>INCREMENT</button>
        <button onClick={()=>{disPatch({type:"Decrement"})}}>DECREMENT</button>
        <button onClick={()=>{disPatch({type:"Reset",payload:0})}}>Reset</button>
        <hr />
        <input type="text" placeholder='Username' onChange={(e)=>{disPatch({type:"uname",payload:e.target.value})}} />
        <h1>USERNAME :{state.username}</h1>
        <input type="text" placeholder='Address' onChange={(e)=>{disPatch({type:"address",payload:e.target.value})}}/>
        <h1>ADDRESS :{state.address}</h1>
    </center>
    </>
  )
}

export default UseReducer
import React, { useEffect, useState } from 'react'

const Hooks2 = () => {
    const [count,setCount]=useState(0)
    const [col,setColor]=useState("GREEN")
    // USEEFFCET WITHOUT DEPENDENCY ARRAY
//    useEffect(()=>{
//        document.title=Count ${count} Color :${col}
//     })
// USEeFFCET WITH empty DEPENDENCY ARRAY
// useEffect(()=>{
//     document.title=Count ${count} Color :${col}
//  },[])

//  USEeFFCET WITH  DEPENDENCY ARRAY
// useEffect(()=>{
//     document.title=Count ${count} Color :${col}
//  },[col])
  return (
    <>
    <h1>USE EFFECT HOOKS</h1>
    <h1>counter :{count}</h1>
    <button onClick={()=>{setCount(count+1)}}>Increment</button>
    <button style={{backgroundColor:col}} onClick={()=>{setColor(col==="GREEN"?"RED":"GREEN")}}>ChangeColor</button>
    </>
  )
}

export default Hooks2


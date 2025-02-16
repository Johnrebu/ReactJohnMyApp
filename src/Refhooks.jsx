import React, { useRef, useState } from 'react'

const Refhooks = () => {
  // const[count,setCount] =useState(0)
  const [value,setValue]=useState("")
  const [name,setName]=useState("John")
   const h1Ref= useRef();
  const inputRef= useRef();
   console.log(h1Ref)
   let count=0;

   function Increment(){
h1Ref.current.innerText=`Count ${count}`    
count=count+1
   }

   function handleClick(){
    setName(value)
    setValue("")
    inputRef.current.focus()
   }
  return (
    <>
    <h1 ref={h1Ref}>COUNTER :</h1>
    {/* <button onClick={()=>{setCount(count+1)}}>Click Me+</button> */}
    <button onClick={Increment}>Increment+</button>
    <input type="text" placeholder='Type any....' ref={inputRef} onChange={(e)=>{setValue(e.target.value)}} value={value}/>
    <h1>MY NAME IS {name}</h1>
    <button onClick={handleClick}>Click me</button>
    </>

  )
}

export default Refhooks

// 1.
// Importing necessary React hooks:
// import React, { useRef, useState } from 'react'
// 2.
// Defining a functional component named Refhooks:
// const Refhooks = () => {
//   // const[count,setCount] =useState(0)
//   const [value,setValue]=useState("")
//   const [name,setName]=useState("John")
//    const h1Ref= useRef();
//   const inputRef= useRef();
//    console.log(h1Ref)
//    let count=0;
// 3.
// Using useRef hook to create a reference to the h1 element:
//    const h1Ref= useRef();
// 4.
// Using useRef hook to create a reference to the input element:
//    const inputRef= useRef();
// 5.
// Logging the reference to the h1 element:
//    console.log(h1Ref)
// 6.
// Defining a local state variable count and a function Increment to update the count:
//    let count=0;

//    function Increment(){
//      h1Ref.current.innerText=`Count ${count}`    
//      count=count+1
//    }
// 7.
// Defining a function handleClick to update the name state and clear the input value, then focusing on the input element:
//    function handleClick(){
//      setName(value)
//      setValue("")
//      inputRef.current.focus()
//    }
// 8.
// Returning the JSX elements to be rendered:
//   return (
//     <>
//     <h1 ref={h1Ref}>COUNTER :</h1>
//     {/* <button onClick={()=>{setCount(count+1)}}>Click Me+</button> */}
//     <button onClick={Increment}>Increment+</button>
//     <input type="text" placeholder='Type any....' ref={inputRef} onChange={(e)=>{setValue(e.target.value)}} value={value}/>
//     <h1>MY NAME IS {name}</h1>
//     <button onClick={handleClick}>Click me</button>
//     </>
//   )
// }
// In this code, the useRef hook is used to create references to the h1 and input elements. The useState hook is used to manage the state variables value and name. The Increment function updates the count value and the h1 element's text content. The handleClick function updates the name state and clears the input value, then focuses on the input element.
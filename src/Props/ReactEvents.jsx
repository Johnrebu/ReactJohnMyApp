import React from 'react'

const ReactEvents = () => {
    function handleClick(){
        alert("event trigger")
    }
    function handlerClick1(event){
        console.log(event)
        
    }
    function handleChange(event){
        console.log("event trigger")
        console.log(event.target.value)
    }
  return (
    <>
    <center><h1>REACT EVENTS</h1>
    <button onClick={handleClick}>Click me</button>
    {/* <button onClick={handleClick1("good morning")}>Click me</button> */}
    <button onClick={handlerClick1}>Click me</button>
    <input type="text" onChange={handleChange} />
    </center>
    </>
  )
}

export default ReactEvents
import React, { createContext, useState } from 'react'
import Component2 from './Component2'
export const myData=createContext()

const Component1 = () => {
    const[name,setName] =useState("John")
    const[col,setColor] =useState("WHITE")
  return (
    <>
    <center>
        <h1>COMPONENT-1</h1>
        <h1>HI {name}</h1>
        <myData.Provider value={[name,col]}>
            <Component2/>
        </myData.Provider>
        
    </center>
    </>
  )
}

export default Component1
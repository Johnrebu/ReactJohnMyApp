import React, { useContext } from 'react'
import { myData } from './Component1'
const Component3 = () => {
  const [name,color] = useContext(myData)
  return (
    <>
    <center>
        <h1>COMPONENT-3</h1>
        <h2>Hi {name}</h2>
        <h2>Hi {color}</h2>


    </center>
    </>
  )
}

export default Component3
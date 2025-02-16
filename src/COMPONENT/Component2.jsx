import React  from 'react'
import Component3 from './Component3'
// import { myData } from './Component1'


const Component2 = () => {
    // const data = useContext(myData)
    // console.log(data)
  return (
    <>
    <center>
        <h1>COMPONENT-2</h1>
         {/* <h2>HI {data}</h2> */}
         <Component3 />
    </center>
    </>
  )
}

export default Component2
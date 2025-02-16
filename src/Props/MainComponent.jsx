import React from 'react'
import Child1 from './Child1'


const MainComponent = () => {
let employees=[{name:"Apple", age:8, address:"America"},
  {name:"Orange", age:6, address:"England"},
  {name:"Grapes", age:9, address:"Canada"},
  {name:"Straberry", age:8, address:"New york"}
]
  return (
    <>
    <center>
        <h1>MAIN COMPONENT</h1>
        {employees.map((emp)=>{
const {name,age,address}=emp;
     return (<Child1 myname={name} myage={age} myaddress={address}></Child1>)
       })}
    </center>
    </>
  )
}

export default MainComponent
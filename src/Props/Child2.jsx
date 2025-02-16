import React from 'react'

const Child2 = (props) => {
   // console.log(props)
   const {myname1,mycourse1}=props
  return (
    <>
    <h1>CHILD-2 COMPONENT</h1>
    <h2>USERNAME :{myname1}</h2>
    <h2>COURSE :{mycourse1}</h2>
    </>
  )
}

export default Child2
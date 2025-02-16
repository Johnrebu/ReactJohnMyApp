import React from 'react'

const Child1 = (props) => {
  const {myname,myage,myaddress}=props
  console.log(props)
  return (
    <>
    <h1>MYNAME:{myname}</h1>
    <h1>MYAGE:{myage}</h1>
    <h1>MYADDRESS:{myaddress}</h1>
    </>
  )
}

export default Child1
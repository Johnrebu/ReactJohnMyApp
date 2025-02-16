import React from "react"
import { useState } from "react"
const UserProfile = () => {
    const [user, setUser] = useState({name:"Tamil", age: 29})

    const changeName = () => {
        setUser((prevUser) => {
            return {...prevUser, name: "John"}
        })
    }
    return(
        <>
          <h1>Profile Details</h1>
          <h3>Name: {user.name}</h3>
          <h3>Age:{user.age} </h3>
          <button onClick={changeName}>Change Name</button>
        </>
    )
}
export default UserProfile
import { useState } from "react";
import React from "react";
const Counter = () => {
        const [count, setCount] = useState(0);
        
        const incrementCount = () => {
            setCount((prevCount)=> prevCount + 1);
            setCount((prevCount)=> prevCount + 1);
            
        };
    return (
        <>
           <h1>Counter: {count}</h1>
           <button onClick={incrementCount}>Increment</button>
        </>
         )
}

export default Counter;
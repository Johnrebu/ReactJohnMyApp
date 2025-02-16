import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "./Style.css"

const DataFetch = () => {
    const [data,setData]=useState([])
    const [input,setInput]=useState("")
//    let myFetch= fetch('https://dummyjson.com/products')
// myFetch.then((res)=>{
//     return res.json()
// }).then((finalData)=>{
//     console.log(finalData)
// })
// console.log(myFetch)

// asynchronous function
// async function myFetch(){
//     let fetchApi=await fetch('https://dummyjson.com/products')
//     let finalData=await fetchApi.json()
//     console.log(finalData)
// }
// myFetch()

//AXIOS FETCH API
async function fetchData(){
    let myFetch=await axios.get(`https://dummyjson.com/products/search?q=${input}`)
    let finalData= myFetch.data.products
    setData(finalData)
}
useEffect(()=>{
    if(input){    
        fetchData()
    }
    fetchData()
},[input])
  return (
    <>
    <div className="container">
        <h1>DATA FETCH API</h1>
        <input type="text" placeholder='Search Products...'  onChange={(e)=>{setInput(e.target.value)}}/>
        <div className="product">
            {data.map((item,index)=>{
                return (
                    <>
                    <div className='myproduct'>
                        <img src={item.thumbnail

} alt="" />
<h2>{item.title}</h2>
<p>{item.description}</p>
<p>Rating :{item.rating}</p>
<p>Price :{item.price}</p>
                    </div>
                    </>
                )
            })}
        </div>
    </div>
    </>
  )
}

export default DataFetch
import React from 'react'
import './Style.css'

const LearnReact = () => {
    let fruitList=["Apple","Banana","Cherry","Orange","kiwi","gfhgfk"]
  
  return (
    <>
    <h1>REACT BASIC</h1>
    {/* <ul>
      <li>{fruitList[0]}</li>
      <li>{fruitList[1]}</li>
      <li>{fruitList[2]}</li>
      <li>{fruitList[3]}</li>
    </ul> */}
{/* LIST RENDER IN JSX */}
<ul>
  {fruitList.map((Fruit,index)=>{
    return (<li key={index}>{Fruit}</li>)

  })}
</ul>
    </>
  )
}

export default LearnReact

//fragement

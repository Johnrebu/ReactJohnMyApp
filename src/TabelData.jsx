import React, { useState } from 'react'
import { dummyData } from './DummyData.js'

const TabelData = () => {
    let data=dummyData
    console.log(data)
    const [search,setSearch]=useState()
  return (
    <>
    <div className="container">
        <input type="text" placeholder='SEARCH DATA...' onChange={(e)=>{setSearch(e.target.value)}}/>
        <table className='table table-striped'>
            <thead>
                <tr>
                    <th>SL.NO</th>
                    <th>FIRSTNAME</th>
                    <th>LASTNAME</th>
                    <th>EMAIL ADDRESS</th>
                    <th>GENDER</th>
                </tr>
            </thead>
            <tbody>
                {data.filter((item)=>{
                    return search ===""?item:item.first_name.includes(search)||item.last_name.includes(search)
                    ||item.email.includes(search)||item.gender.includes(search)
                }).map((item,index)=>{
                    return (
                        <tr key={index}>
                             <td>{item.id}</td>
                             <td>{item.first_name}</td>
                             <td>{item.last_name}</td>
                             <td>{item.email}</td>
                             <td>{item.gender}</td>
                        </tr>
                    )

                })}
            </tbody>
        </table>
    </div>
    </>
  )
}

export default TabelData
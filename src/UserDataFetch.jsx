// import React from 'react'
// import UseFetch from './UseFetch'

// const UserDataFetch = () => {
//  const data=   UseFetch("https://jsonplaceholder.typicode.com/users");
//  console.log(data)
//   return (
//     <>
//     <h1>UserDataFetch</h1>
//     <div>
//         {data.map((user)=>{
//             return <h2>{user.name}</h2>
//         })}
//         </div>
//     </>
//   )
// }

// export default UserDataFetch

import React from 'react';
import UseFetch from './UseFetch';

const UserDataFetch = () => {
  const { data, loading, error } = UseFetch("https://jsonplaceholder.typicode.com/users");

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error}</h1>;

  return (
    <>
      <h1>UserDataFetch</h1>
      <div>
        {data.map((user) => (
          <h2 key={user.id}>{user.name}</h2>
        ))}
      </div>
    </>
  );
};

export default UserDataFetch;
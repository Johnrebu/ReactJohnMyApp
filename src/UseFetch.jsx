// import  { useEffect, useState } from 'react' 

// const UseFetch = (url) => {
//     const [response,setResponse] =  useState([])
    
//      useEffect(()=>{
//         fetch(url)
//         .then((res)=>res.json())
//         .then((finalData)=>{setResponse(finalData)})
//      },[])
//   return response
// }

// export default UseFetch

import { useEffect, useState } from 'react';

const useFetch = (url) => {
  const [response, setResponse] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error(res.statusText);
        const finalData = await res.json();
        setResponse(finalData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);  // Added URL as dependency

  return { data: response, loading, error };
};

export default useFetch;
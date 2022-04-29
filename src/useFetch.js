//custom hooks need to start with the word "use"
import { useState,useEffect } from 'react';

const useFetch = (url)=> {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect(()=>{

        const abortCont = new AbortController();

        //the 'abortCont' can be used to stop the fetch
        fetch(url,{signal:abortCont.signal})
          .then(res=>{
            if(!res.ok) {
              throw Error('Could not fetch the data for that resource')
            }
            return res.json();
          })
          .then(data=>{
            /**Here is where the data arives to the frontend*/
            setData(data)
            setIsPending(false)
            setError(null)
            
          }).catch(err =>{
            if (err.name === 'AbortError') {
              console.log('fetch Aborted')
            }
            setError(err.message)
  
            console.log(err)
            setIsPending(false)
          })
          return ()=> abortCont.abort();
      },[url]/** Whenever the url changes, the useEffect hook is called */);
      return { data,isPending,error }
}

export default useFetch;
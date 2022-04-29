import React from 'react'
import useFetch from '../useFetch';
import { useParams } from "react-router-dom/cjs/react-router-dom.min";


const NotePage = () => {

    const { id } = useParams()
    const { data,error,isPending } = useFetch('/api/notes/'+id)

  return (
    <div>
        NotePage
        { isPending && <div>Loading ...</div>}
        { error && <div>{ error}</div> }

        {data && (
                <div>
                    <p>{ data.body }</p>
                </div>  
            )}
    </div>
  )
}

export default NotePage
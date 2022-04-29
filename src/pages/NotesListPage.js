import React, {useEffect,useState}from 'react'
import Listitem from '../components/Listitem'
const NotesListPage = () => {


  let [notes,setNotes] = useState([])

  useEffect(()=>{
    getNotes()
  },[])
  
  //getting the data from the api
  let getNotes = async () => {
    let response = await fetch('/api/notes/')
    let data = await response.json()
    setNotes(data)
  }
  return (
    <div>
        <div className='notes-list'>
            {notes.map((note, index)=>(
                <Listitem key={index} note={note}/>
            ))}
        </div>
    </div>
  )
}

export default NotesListPage
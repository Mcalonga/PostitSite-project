import {useEffect, useState} from 'react'
import {nanoid} from 'nanoid'
import './App.css';
import NotesList from './components/NotesList';
import Search from './components/Search';
import Header from './components/Header';

function App() {
  const [darkmode, Setdarkmode]= useState(false)

  const [searchtext, Setsearchtext] = useState("")

 

  const [Notes,setNotes] = useState(
    [
      {
        id:nanoid(),
        text:"hello there",
        date:"1995/05/25"
      },
      {
        id:nanoid(),
        text:"hello there",
        date:"1995/05/25"
      }




    ]
  )
  const AddNotes = (text) => {
    const date = new Date();
    const newNote = {
      text:text,
      date:date.toLocaleDateString(),
      id:nanoid()
    }
    const newNotes = [...Notes, newNote]
    setNotes(newNotes)
    
  } 

  const DeleteNote = (id) => {
    const newNotes = Notes.filter((note) => note.id !== id);
    setNotes(newNotes)
  }

  useEffect(() => {
    const savednotes = JSON.parse(localStorage.getItem('react-save-notes-data'));
    if(savednotes) {setNotes(savednotes)};
  }, []
  
  )

  useEffect(() => {
    localStorage.setItem('react-save-notes-data', JSON.stringify(Notes))
  }, [Notes])
  
  

  return (

    <div className={' ${darkmode && "dark-mode"}' }>
      <div className="App">
      <Header handledarkmode = {Setdarkmode} />
      <Search handlesearch= {Setsearchtext} />
      <NotesList 
        notes = {Notes.filter((note) => note.text.toLowerCase().includes(searchtext))}
        handleAddNotes={AddNotes}
        handleDeleteNote = {DeleteNote} />
    
    </div>
  </div>
  );
}

export default App;

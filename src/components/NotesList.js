import React from 'react'
import AddNote from './AddNote'
import Note from './Note'

const NotesList = ({notes, handleAddNotes, handleDeleteNote}) => {
  return (
    <div className='notes-list'>
        <AddNote handleAddNotes={handleAddNotes} />
        {notes.map((note) => (<Note
            id = {note.id}
            text = {note.text}
            date = {note.date}
            handleDeleteNote ={handleDeleteNote }
        />
        ))}
    </div>
  )
}

export default NotesList
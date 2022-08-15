import {useState} from 'react'

const AddNote = ({handleAddNotes}) => {
 
    const[notetext, usenotetext]= useState("")

    const numlimit = 200;

    const handlechange = (event) => {
        if(numlimit - event.target.value.length >= 0 )
        usenotetext(event.target.value)
    }

    
    const handleSaveClick = () => {
        handleAddNotes(notetext);
        usenotetext("")
    }
    

  return (
    <div className='note new'>
        <textarea name="" id="" cols="10" rows="10" placeholder='escreva seu post it aqui.' value={notetext} onChange={handlechange}  >

        </textarea>
        <div className='note-footer'>
            <small>{numlimit - notetext.length} caracteres sobrando.</small>
            <button className='button-postit' onClick={handleSaveClick} >save</button>
        </div>
    </div>
  )
}

export default AddNote
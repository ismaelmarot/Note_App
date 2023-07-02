import Note from '../Note/Note';
import AddNote from '../AddNote/AddNote';
import './NotesList.css';

const NoteList = ({ notes, handleAddNote, handleDeleteNote }) => {
    return(
        <>
            <AddNote handleAddNote={ handleAddNote } />
    
            <div className='notes-list'>
                {notes.slice().reverse().map((note)=> (
                    <Note 
                        key={note.id}
                        id={ note.id }
                        text={ note.text }
                        date={ note.date }
                        handleDeleteNote={ handleDeleteNote }
                    />
                ))}
            </div>
        </>
    )
}

export default NoteList;

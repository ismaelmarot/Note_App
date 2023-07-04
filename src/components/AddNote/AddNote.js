import React from 'react';
import { useState } from 'react';

import { HiOutlineSave } from 'react-icons/hi';

import { NoteFooterStyled } from '../Note/NoteFooterStyled';
import { NoteStyled } from '../Note/NoteStyled';

import './AddNote.css';

const AddNote = ({ handleAddNote }) => {
    const [noteText, setNoteText] = useState('');

    const characterLimit = 300;

    const handleChange = (event) =>{
        if(characterLimit - event.target.value.length >= 0)
            setNoteText(event.target.value);
    }

    const handleSaveClick = () =>{
        if(noteText.trim().length > 0){
            handleAddNote(noteText);
            setNoteText('');
        }
    }

    return(
        <NoteStyled className='note new-note'>
            <textarea 
                className='text-area' 
                rows='8' 
                cols='10' 
                placeholder="Type to add a note..."
                value={ noteText }
                onChange={ handleChange }    
            ></textarea>
            <NoteFooterStyled>
                <small>{ characterLimit - noteText.length } Remaining</small>
                
                
                <button className='save-button' onClick={ handleSaveClick }>
                    <HiOutlineSave size={20} color="black" />
                </button>
            </NoteFooterStyled>
        </NoteStyled>
    )
}

export default AddNote;

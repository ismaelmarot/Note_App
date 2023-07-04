import React from 'react';
import { MdDeleteForever } from 'react-icons/md';
import { NoteStyled } from './NoteStyled';
import { NoteFooterStyled } from './NoteFooterStyled';

const Note = ({id, text, date, handleDeleteNote }) => {
    return(
        <NoteStyled>
            <span>{ text }</span>
            <NoteFooterStyled>
                <small>{ date }</small>
                <MdDeleteForever 
                    onClick={()=> handleDeleteNote(id)} 
                    className='delete-icon'
                />
            </NoteFooterStyled>
        </NoteStyled>
    )
}

export default Note;

import { MdDeleteForever } from 'react-icons/md';

const Note = () => {
    return(
        <div className='note'>
            <span>First Note</span>
            <div className='note-footer'>
                <small>02/03/1994</small>
                <MdDeleteForever className='delete-icon'/>
            </div>
        </div>
    )
}

export default Note;

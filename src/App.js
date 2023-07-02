import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import NoteList from './components/NotesList/NotesList';
import Search from './components/SearchBar/SearchBar';
import Header from './components/Header/Header';

const App = () => {
  const [notes, setNotes] = useState([{
    id: nanoid(),
    text:'Firs Note',
    date:'05/02/1984',
    },
    {
    id: nanoid(),
    text:'Second Note',
    date:'05/02/1984',
    },
    {
    id: nanoid(),
    text:'Third Note',
    date:'05/02/1984',
    },
  ]);  

  const [searchText, setSearchText] = useState(''); 

  const [darkMode, setDarkMode] = useState(false); 

  useEffect(()=>{
    const savedNotes = JSON.parse(
      localStorage.getItem('react-notes-app-data')
    );
    if(savedNotes){
      setNotes(savedNotes);
    }
  },[])

  useEffect(()=>{
    localStorage.setItem(
      'react-notes-app-data', 
      JSON.stringify(notes))
  },[notes]);

  const addNote = (text) =>{
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  }

  const deleteNote = (id) =>{
    const newNotes = notes.filter((note)=> note.id !== id);
    setNotes(newNotes);
  }

  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className='container'>
        <Header handleToggleDarkMode={setDarkMode} />
        <Search handleSearchNote={ setSearchText } />
        <NoteList 
          notes={ notes.filter((note)=> 
            note.text.toLowerCase().includes(searchText)) 
          } 
          handleAddNote={ addNote } 
          handleDeleteNote = { deleteNote }
        />
      </div>
    </div>
  );
};

export default App;
 
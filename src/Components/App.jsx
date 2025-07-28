import logo from '../logo.svg';
import './App.css';
import Header from './Header';
import CreateNote from "./NotesComponents/CreateNote";
import Note from "./NotesComponents/Note";
import { useState } from 'react';

function App() {

  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    })
  }

  return (
    <div className="app-container">
      <Header />
      <CreateNote onAdd={addNote}/>
      {notes.map((note, index) => {
        return (
        <Note
          id = {index}
          title={note.title}
          content={note.content}
          color={note.color}
        />
        )
      })}
    </div>
    
  )
}

export default App;

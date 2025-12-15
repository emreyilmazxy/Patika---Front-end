import './App.css'
import { useState } from 'react';
import { Header } from './components/headerSearch';
import { NoteForm } from './components/noteForm';
import { NoteList } from './components/noteList';

export type Note = {
  id: number;
  text: string;
  color: string;
}

function App() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleAddNote = (text: string, color: string) => {
    const newNote: Note = {
      id: Date.now(),
      text,
      color
    };
    setNotes(prevNotes => [...prevNotes, newNote]);
  };

  const handleDeleteNote = (id: number) => {
    setNotes(prevNotes => prevNotes.filter(note => note.id !== id));
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const filteredNotes = notes.filter(note =>
    note.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <section id='note-section' className="note-container">
        <Header onSearch={handleSearch} />
        <NoteForm onAddNote={handleAddNote} />
        <NoteList notes={filteredNotes} onDeleteNote={handleDeleteNote} />

      </section>
    </>
  )
}

export default App

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import AddNote from './components/AddNote';
import NoteList from './components/NoteList';
import './App.css';

const App = () => {
  const [notes, setNotes] = useState([]);

  const addNote = note => setNotes([note, ...notes]);

  return (
    <div className="container py-4">
      <Header />
      <AddNote onAdd={addNote} />
      <NoteList notes={notes} />
      <Footer />
    </div>
  );
};

export default App;

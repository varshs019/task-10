import React from 'react';
import Note from './Note';

const NoteList = ({ notes }) => (
  <div className="row">
    {notes.map((note, idx) => (
      <Note key={idx} title={note.title} content={note.content} />
    ))}
  </div>
);

export default NoteList; 
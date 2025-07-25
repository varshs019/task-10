import React, { useState } from 'react';

const AddNote = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleAdd = () => {
    if (!title.trim() || !content.trim()) {
      window.alert('Please fill in both the title and content!');
      return;
    }
    onAdd({ title, content });
    setTitle('');
    setContent('');
  };

  return (
    <div className="card mb-4">
      <div className="card-body">
        <div className="mb-3">
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Title"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <textarea
            className="form-control mb-2"
            placeholder="Take a note..."
            rows="2"
            value={content}
            onChange={e => setContent(e.target.value)}
          />
          <button className="btn btn-primary w-100" onClick={handleAdd}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddNote; 
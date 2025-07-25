import React from 'react';

const Note = ({ title, content }) => (
  <div className="col-md-4 mb-3">
    <div className="card h-100 shadow-sm">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{content}</p>
      </div>
    </div>
  </div>
);

export default Note; 
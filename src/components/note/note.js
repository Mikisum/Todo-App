import React from 'react';

const Note = () => {
  return (
    <div className="input-group mb-3">
      <input type="text" className="form-control" placeholder="Add note" />
      <div className="input-group-append">
        <button className="btn btn-outline-secondary" type="button">Add</button>
      </div>
    </div>
  )
}

export default Note;
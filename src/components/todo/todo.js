import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const Todo = () => {
  const [text, setText] = useState('')
  const dispatch = useDispatch()

  const handleChange =  e => setText(e.target.value)
  const handleKeyDown = (e) => {
    // If the user pressed the Enter key:
    const trimmedText = text.trim();
    if (e.which === 13 && trimmedText) {
      // Dispatch the "todo added" action with this text
      dispatch({ type: "TODO_ADDED", payload: trimmedText });
      // And clear out the text input
      setText("");
    }
  };
  return (
      <div className="input-group mb-3">
        <input
          type="text" 
          className="form-control" 
          placeholder="Add note" 
          autoFocus={true}
          value={text}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          />
        <div className="input-group-append">
          <button 
            className="btn btn-outline-secondary"
            type="button"
          >
            Add
          </button>
        </div>
      </div> 
  
    
  )
}

export default Todo;
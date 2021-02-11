import React from 'react';

import './todo-list-item.css';

const TodoListItem = ({ todo, onDeleted }) => {
  const {id, text} = todo;
  
  return(
    <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center p-0">
      {text}
      <div>
        <button className="btn btn-outline-secondary" type="button"><i className="fas fa-pencil-alt"></i></button>
        <button 
          className="btn btn-outline-danger" 
          type="button"
          onClick={() => onDeleted(id)}
        ><i className="far fa-trash-alt"></i></button>
      </div>
    </li>
  )
}

export default TodoListItem;


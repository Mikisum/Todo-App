import React from 'react';

import './todo-list-item.css';

const TodoListItem = ({ note }) => {
  const {id, title} = note;
  return(
    <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center p-0">
      {title}
      <div>
        <button className="btn btn-outline-secondary" type="button"><i class="fas fa-pencil-alt"></i></button>
        <button className="btn btn-outline-danger" type="button"><i className="far fa-trash-alt"></i></button>
      </div>
    </li>
  )
}

export default TodoListItem;


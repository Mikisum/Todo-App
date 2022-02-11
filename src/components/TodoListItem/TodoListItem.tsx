import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import './todo-list-item.css';

export const TodoListItem: FC = ({ }) => {

  const [editable, setEditable] = useState(false);
  // const [text, setText] = useState(todo.text);
  const [completed, setCompleted] = useState(false);

  let dispatch = useDispatch()


  return (
    <li
      className="list-group-item list-group-item-action d-flex justify-content-between align-items-center p-0"
      style={{
        cursor: "pointer",
        textDecoration: completed ? "line-through" : "none"
      }}
    >
      <input
        type="checkbox"
        aria-label="Checkbox for following text input"
        onChange={() => {
          setCompleted(!completed)
          // dispatch(updateTodo(todo.id, text, !completed))
        }}

      />
      {/* {editable ? <input type='text' className='form-control'
        // defaultValue={text}
        onChange={
          (e) => setText(e.target.value)
        }
      /> : text}
      <div>
        <button
          className="btn btn-outline-secondary"
          type="button"
          onClick={() => {
            if (editable) {
              setText(text)
              dispatch(updateTodo(todo.id, text, completed))
            }
            setEditable(!editable)
          }
          }
        >{editable ? 'Update' : <i className="fas fa-pencil-alt"></i>}

        </button>
        <button
          className="btn btn-outline-danger"
          type="button"
          onClick={() => dispatch(todoDeleted(todo.id))} */}
      {/* ><i className="far fa-trash-alt"></i></button> */}
      {/* </div> */}
    </li>
  )
}


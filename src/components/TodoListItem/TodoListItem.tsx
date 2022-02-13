import { faCheck, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC, useState } from 'react';
import { useActions } from '../../hooks/useActions';
import { Todo } from '../../types/todos';
import classes from './todo-list-item.module.css';

type PropsType = {
  todo: Todo
}

export const TodoListItem: FC<PropsType> = ({ todo }) => {

  const [editable, setEditable] = useState(false);
  const [text, setText] = useState(todo.title);
  const { todoDelete, todoOnChange } = useActions()



  const updateTodoItem = () => {
    if (editable) {
      const newTodo = {
        userId: 1,
        id: todo.id,
        title: text,
        completed: todo.completed
      }
      setText(text)
      todoOnChange(newTodo)
    }
    setEditable(!editable)
  }

  return (
    <li
      className={classes.todoListItem}
    >
      <input
        type="checkbox"
        aria-label="Checkbox for following text input"
        checked={todo.completed}
        onChange={() => {
          todoOnChange({
            userId: 1,
            id: todo.id,
            title: text,
            completed: !todo.completed
          })
        }}
      />
      {editable
        ? <input
          type='text'
          defaultValue={text}
          onChange={e => setText(e.target.value)}
        />
        : text}
      <div>
        <button
          className={classes.button}
          type="button"
          onClick={() => updateTodoItem()}
        >
          {editable ? <FontAwesomeIcon icon={faCheck} /> : <FontAwesomeIcon icon={faPen} />}

        </button>
        <button
          className={classes.button}
          type="button"
          onClick={() => todoDelete(todo)}
        >
          <FontAwesomeIcon icon={faTrash} color='red' />
        </button>
      </div>
    </li>
  )
}


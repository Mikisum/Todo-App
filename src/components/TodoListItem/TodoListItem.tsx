import { faCircleCheck, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC, useState } from 'react';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { Todo } from '../../types/todos';
import classes from './todo-list-item.module.css';


type PropsType = {
  todo: Todo
}

export const TodoListItem: FC<PropsType> = ({ todo }) => {

  const { todos } = useTypedSelector(state => state.todos)
  const [editable, setEditable] = useState(false);
  const [text, setText] = useState(todo.title);
  const [todoCompleted, setTodoComleted] = useState(todo.completed)
  const { todoDelete, todoOnChange, setTotalTodosCount } = useActions()

  const updateTodoItem = () => {
    if (editable) {
      const newTodo = {
        userId: 1,
        id: todo.id,
        title: text,
        completed: todo.completed
      }
      todoOnChange(newTodo)
    }
    setEditable(!editable)
    console.log(text)
  }

  return (
    <li
      className={classes.todoListItem}
    >
      <div className={classes.itemContainer}>
        <input
          type="checkbox"
          aria-label="Checkbox for following text input"
          className={classes.checkbox}
          checked={todoCompleted}
          onChange={() => {
            setTodoComleted(!todoCompleted)
            todoOnChange({
              userId: 1,
              id: todo.id,
              title: text,
              completed: todoCompleted
            })
          }
          }
        />

        {editable
          ? <textarea
            defaultValue={text}
            onChange={e => setText(e.target.value)}
          />
          : <span>{text}</span>}
      </div>
      <div className={classes.buttonsGroup}>
        <button
          className={classes.button}
          type="button"
          onClick={() => updateTodoItem()}
        >
          {editable
            ? <FontAwesomeIcon icon={faCircleCheck} className={classes.icon} />
            : <FontAwesomeIcon icon={faPen} className={classes.icon} />
          }

        </button>
        <button
          className={classes.button}
          type="button"
          onClick={() => {
            todoDelete(todo)
            setTotalTodosCount(todos.length - 1)
          }}
        >
          <FontAwesomeIcon icon={faTrash} color='red' className={classes.icon} />
        </button>
      </div>
    </li>
  )
}


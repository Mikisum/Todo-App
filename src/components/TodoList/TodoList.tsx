import React, { FC, useEffect, useState } from 'react';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import './todo-list.css';

const TodoList: FC = () => {
  const { todos, loading, error } = useTypedSelector(state => state.todos)
  console.log(todos)
  const { fetchTodos } = useActions()

  const [editable, setEditable] = useState(false);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    fetchTodos()
  }, [])

  if (loading) {
    return <h1>Идет загрузка...</h1>
  }
  if (error) {
    return <h1>{error}</h1>
  }

  return (
    <ul className='list-group'>
      {todos.map(todo =>
        <li key={todo.id}>{todo.title}</li>
      )}
    </ul>
  )
}

export default TodoList;
import React, { FC, useEffect, useState } from 'react';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import Paginator from '../common/Paginator';
import './todo-list.css';

const TodoList: FC = () => {
  const { todos, loading, error, page, limit, totalTodosCount } = useTypedSelector(state => state.todos)
  const { fetchTodos, setTodoPage } = useActions()
  const pages = [1, 2, 3, 4, 5]
  const [editable, setEditable] = useState(false);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    fetchTodos(page, limit)
  }, [page])

  if (loading) {
    return <h1>Идет загрузка...</h1>
  }
  if (error) {
    return <h1>{error}</h1>
  }

  return (
    <ul className='list-group'>
      {todos.map(todo =>
        <li key={todo.id}>{todo.id} - {todo.title}</li>
      )}
      <Paginator currentPage={page}
        onPageChanged={setTodoPage}
        totalItemsCount={totalTodosCount}
        limit={limit} />
      {/* <div style={{ display: 'flex' }}>

        {pages.map(p =>
          <div
            onClick={() => setTodoPage(p)}
            key={p}
            style={{ border: p === page ? '2px solid green' : '1px solid gray', padding: 10 }}
          >
            {p}
          </div>
        )}
      </div> */}
    </ul>
  )
}

export default TodoList;
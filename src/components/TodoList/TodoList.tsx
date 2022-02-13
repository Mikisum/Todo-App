import React, { FC, useEffect } from 'react';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import Paginator from '../common/Paginator';
import { TodoForm } from '../todo/TodoForm';
import { TodoListItem } from '../TodoListItem/TodoListItem';
import classes from './todoList.module.css';

const TodoList: FC = () => {
  const { todos, loading, error, page, limit, totalTodosCount } = useTypedSelector(state => state.todos)
  const { fetchTodos, setTodoPage } = useActions()
  console.log(todos)

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
    <>
      <TodoForm />
      <ul className={classes.listGroup} >
        {todos.map(todo =>
          <TodoListItem
            key={todo.id}
            todo={todo}
          />

        )}
      </ul>
      <Paginator
        currentPage={page}
        onPageChanged={setTodoPage}
        totalItemsCount={totalTodosCount}
        limit={limit} />
    </>
  )
}

export default TodoList;
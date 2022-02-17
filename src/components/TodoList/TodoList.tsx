import React, { FC, useEffect, useState } from 'react';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { Todo } from '../../types/todos';
import Paginator from '../common/Paginator';
import { TodoForm } from '../todo/TodoForm';
import { TodoListItem } from '../TodoListItem/TodoListItem';
import classes from './todoList.module.css';

const TodoList: FC = () => {
  const { todos, loading, error, page, limit, totalTodosCount } = useTypedSelector(state => state.todos)
  const { fetchTodos, setTodoPage } = useActions()
  const [todosOnPage, setTodosOnPage] = useState([] as Todo[])

  useEffect(() => {
    fetchTodos()
  }, [])

  useEffect(() => {
    let newTodos = todos.slice((page - 1) * limit, (page * limit))
    setTodosOnPage(newTodos)

  }, [todos, page])

  return (
    <div className={classes.todoList}>
      {loading && <h1>loading...</h1>}
      <TodoForm />
      <ul className={classes.listGroup} >
        {todosOnPage.map(todo =>
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
    </div>
  )
}

export default TodoList;
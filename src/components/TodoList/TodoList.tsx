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
    console.log('call once')
  }, [page])

  return (
    <div className={classes.todoList}>
      {loading && <h1>loading...</h1>}
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
    </div>
  )
}

export default TodoList;
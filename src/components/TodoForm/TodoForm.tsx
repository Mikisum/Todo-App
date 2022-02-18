import { useState } from 'react';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import classes from './todoForm.module.css';

export const TodoForm = () => {
	const [input, setInput] = useState("");
	const { todos } = useTypedSelector(state => state.todos)
	const { addTodo, setTotalTodosCount } = useActions()

	const handleSubmit = (e: React.SyntheticEvent<EventTarget>) => {
		e.preventDefault()
		if (input) {
			addTodo(input)
			setTotalTodosCount(todos.length + 1)
			setInput('')
		}
	}

	return (
		<form
			className={classes.form}
			onSubmit={handleSubmit}>
			<input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
			<input className={classes.submit} type="submit" value="Add" />
		</form>
	)
}
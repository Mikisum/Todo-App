import { useState } from 'react';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import classes from './todoForm.module.css';

export const TodoForm = () => {
	const [input, setInput] = useState("");
	const { todos } = useTypedSelector(state => state.todos)
	const { addTodo } = useActions()

	const handleSubmit = (e: React.SyntheticEvent<EventTarget>) => {

		e.preventDefault();
		if (input) {
			console.log(input)
			addTodo(input);
			console.log(todos)

		}
	}

	return (
		<form
			className={classes.form}
			onSubmit={handleSubmit}>
			{/* register your input into the hook by invoking the "register" function */}
			<input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
			<input className={classes.submit} type="submit" />
		</form>
	)
}
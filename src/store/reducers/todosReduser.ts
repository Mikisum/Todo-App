import { Todo, TodosAction, TodosActionTypes, TodosState } from "../../types/todos";

const initialState: TodosState = {
	todos: [] as Array<Todo>,
	loading: false,
	error: null,
	page: 1,
	limit: 10,
	totalTodosCount: 0
}

const updateTodoElement = (todos: Todo[], todo: Todo) => {
	const index = todos.findIndex(el => el.id === todo.id)
	if (index !== -1) todos[index] = todo
	return todos
}

export const todosReducer = (state = initialState, action: TodosAction): TodosState => {
	switch (action.type) {

		case TodosActionTypes.FETCH_TODOS:
			return { ...state, loading: true }

		case TodosActionTypes.FETCH_TODOS_SUCCESS:
			return { ...state, loading: false, todos: action.payload }

		case TodosActionTypes.FETCH_TODOS_ERROR:
			return { ...state, loading: false, error: action.payload }

		case TodosActionTypes.SET_TODO_PAGE:
			return { ...state, page: action.payload }

		case TodosActionTypes.SET_TOTAL_TODOS_COUNT:
			return { ...state, totalTodosCount: action.payload }

		// since the resource(https://jsonplaceholder.typicode.com) does not allow adding more than one element, 
		//  I do not use the response and set the id manually
		case TodosActionTypes.TODO_ADD:
			return {
				...state, todos: [...state.todos,
				{
					userId: 1,
					id: state.todos.length + 1,
					title: action.payload,
					completed: false
				}]
			}

		case TodosActionTypes.TODO_DELETE:
			return { ...state, todos: state.todos.filter((todo) => todo.id !== action.payload) }

		case TodosActionTypes.TODO_ONCHANGE:
			return {
				...state, todos: updateTodoElement(state.todos, action.payload)
			}

		default:
			return state
	}
}
import { TodosAction, TodosActionTypes, TodosState } from "../../types/todos"

const initialState: TodosState = {
	todos: [],
	loading: false,
	error: null
}

export const todosReducer = (state = initialState, action: TodosAction): TodosState => {
	switch (action.type) {

		case TodosActionTypes.FETCH_TODOS:
			return { loading: true, error: null, todos: [] }

		case TodosActionTypes.FETCH_TODOS_SUCCESS:
			return { loading: false, error: null, todos: action.payload }

		case TodosActionTypes.FETCH_TODOS_ERROR:
			return { loading: false, error: action.payload, todos: [] }

		default:
			return state
	}
}
export interface TodosState {
	todos: any[],
	loading: boolean,
	error: null | string,
	page: number,
	limit: number,
	totalTodosCount: number
}

export enum TodosActionTypes {
	FETCH_TODOS = 'FETCH_TODOS',
	FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS',
	FETCH_TODOS_ERROR = 'FETCH_TODOS_ERROR',
	SET_TODO_PAGE = 'SET_TODO_PAGE',
	SET_TOTAL_TODOS_COUNT = 'SET_TOTAL_TODOS_COUNT'
}

interface FetchTodosAction {
	type: TodosActionTypes.FETCH_TODOS
}

interface FetchTodosSuccessAction {
	type: TodosActionTypes.FETCH_TODOS_SUCCESS,
	payload: any[]
}

interface FetchTodosErrorAction {
	type: TodosActionTypes.FETCH_TODOS_ERROR,
	payload: string
}

interface SetTodoPage {
	type: TodosActionTypes.SET_TODO_PAGE,
	payload: number
}

interface SetTotalTodosCount {
	type: TodosActionTypes.SET_TOTAL_TODOS_COUNT,
	payload: number
}

export type TodosAction =
	FetchTodosAction
	| FetchTodosSuccessAction
	| FetchTodosErrorAction
	| SetTodoPage
	| SetTotalTodosCount

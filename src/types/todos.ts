export interface TodosState {
	todos: Todo[],
	loading: boolean,
	error: null | string,
	page: number,
	limit: number,
	totalTodosCount: number
}

export interface Todo {
	userId: number,
	id: number,
	title: string,
	completed: boolean
}

export enum TodosActionTypes {
	FETCH_TODOS = 'FETCH_TODOS',
	FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS',
	FETCH_TODOS_ERROR = 'FETCH_TODOS_ERROR',
	SET_TODO_PAGE = 'SET_TODO_PAGE',
	SET_TOTAL_TODOS_COUNT = 'SET_TOTAL_TODOS_COUNT',
	TODO_ADD = 'TODO_ADD',
	TODO_DELETE = 'TODO_DELETE',
	TODO_ONCHANGE = 'TODO_ONCHANGE'
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

interface SetTodoPageAction {
	type: TodosActionTypes.SET_TODO_PAGE,
	payload: number
}

interface SetTotalTodosCountAction {
	type: TodosActionTypes.SET_TOTAL_TODOS_COUNT,
	payload: number
}

interface TodoAddAction {
	type: TodosActionTypes.TODO_ADD,
	payload: string
}

interface TodoDeleteAction {
	type: TodosActionTypes.TODO_DELETE,
	payload: number
}

interface TodoOnChangeAction {
	type: TodosActionTypes.TODO_ONCHANGE,
	payload: Todo
}

export type TodosAction =
	FetchTodosAction
	| FetchTodosSuccessAction
	| FetchTodosErrorAction
	| SetTodoPageAction
	| SetTotalTodosCountAction
	| TodoAddAction
	| TodoDeleteAction
	| TodoOnChangeAction

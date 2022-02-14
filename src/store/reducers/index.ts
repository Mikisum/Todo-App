import { combineReducers } from "redux";
import { todosReducer } from "./todosReduser";

export const rootReduser = combineReducers({
	todos: todosReducer
})

export type RootState = ReturnType<typeof rootReduser>
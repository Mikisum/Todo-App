import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import * as TodosAction from '../store/actions/index'

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(TodosAction, dispatch)
}
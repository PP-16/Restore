import {combineReducers, legacy_createStore} from 'redux'
import ReducerCounter from './ReducerCounter'
import TestReducer from './TestReducer'

//assamble
export default function ConfigStore() {
    const reducers = combineReducers({ReducerCounter,TestReducer})

    return legacy_createStore(reducers)
}
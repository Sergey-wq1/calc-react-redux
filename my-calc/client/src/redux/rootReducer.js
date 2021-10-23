import { combineReducers } from 'redux'
import numReducer from './numReducer'

const rootReducer = combineReducers({ num: numReducer })

export default rootReducer

import {
  acNumOperation,
  delplyNumOperation,
  evalNumOperation,
  minusplyNumOperation,
  multiplyNumOperation,
  plusminNumOperation,
  plusNumOperation,
  pointNumOperation,
  persentNumOperation,
  deleteHistory,
  showRenewHistory,
} from '../actions/actions'
import Fetch from '../scripts/dataFetch'
import deleteRequest from '../scripts/deleteHistory'
import OperationSign from '../scripts/PutAway'
import updateHistory from '../scripts/updateHistory'
import returnObjectPropertyTypeValue from '../scripts/valuesNumOperation'

const initialState = {
  updateNedeed: 0,
  addHistory: [],
  history: [],
  counter: '',
}

const numReducer = (state = initialState, action) => {
  const operationSign = new OperationSign()
  switch (action.type) {
    case returnObjectPropertyTypeValue(action.type)().type:
      return {
        ...state,
        addHistory: [],
        counter: `${state.counter}${returnObjectPropertyTypeValue(action.type)().value}`,
      }
    case plusNumOperation:
      return {
        ...state,
        addHistory: [],
        counter: `${operationSign.putAway(state.counter)}+`,
      }
    case acNumOperation:
      return {
        ...state,
        addHistory: [],
        counter: '',
      }
    case multiplyNumOperation:
      return {
        ...state,
        addHistory: [],
        counter: `${operationSign.putAway(state.counter)}*`,
      }
    case minusplyNumOperation:
      return {
        ...state,
        addHistory: [],
        counter: `${operationSign.putAway(state.counter)}-`,
      }
    case delplyNumOperation:
      return {
        ...state,
        addHistory: [],
        counter: `${operationSign.putAway(state.counter)}/`,
      }
    case pointNumOperation:
      return {
        ...state,
        addHistory: [],
        counter: `${operationSign.putAway(state.counter)}.`,
      }
    case persentNumOperation:
      return {
        ...state,
        addHistory: [],
        counter: `${operationSign.putAway(state.counter)}%`,
      }
    case plusminNumOperation:
      if (state.counter[state.counter.length - 1] === '+') {
        return {
          ...state,
          addHistory: [],
          counter: `${state.counter.slice(0, state.counter.length - 1)}-`,
        }
      } if (state.counter[state.counter.length - 1] === '-') {
        return {
          ...state,
          addHistory: [],
          counter: `${state.counter.slice(0, state.counter.length - 1)}+`,
        }
      }
      break
    case evalNumOperation:
      Fetch('/', 'POST', state.counter, operationSign.putFirst(operationSign.endValue(state.counter)))
      return {
        ...state,
        updateNedeed: state.updateNedeed + 1,
        counter: operationSign.putFirst(operationSign.endValue(state.counter)),
      }
    case deleteHistory:
      deleteRequest(action.expression, action.result)
      return {
        ...state,
        updateNedeed: state.updateNedeed + 1,
        history: updateHistory(state.history),
      }
    case showRenewHistory:
      console.log('работаю')
      return {
        ...state,
        history: action.data,
      }
    default:
      return state
  }
  return undefined
}

export default numReducer

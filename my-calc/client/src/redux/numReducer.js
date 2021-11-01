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
  disabledPoint: false,
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
        disabledPoint: false,
        counter: `${operationSign.putAway(state.counter)}+`,
      }
    case acNumOperation:
      return {
        ...state,
        addHistory: [],
        disabledPoint: false,
        counter: '',
      }
    case multiplyNumOperation:
      return {
        ...state,
        addHistory: [],
        disabledPoint: false,
        counter: `${operationSign.putAway(state.counter)}*`,
      }
    case minusplyNumOperation:
      return {
        ...state,
        addHistory: [],
        disabledPoint: false,
        counter: `${operationSign.putAway(state.counter)}-`,
      }
    case delplyNumOperation:
      return {
        ...state,
        addHistory: [],
        disabledPoint: false,
        counter: `${operationSign.putAway(state.counter)}/`,
      }
    case pointNumOperation:
      return {
        ...state,
        disabledPoint: true,
        addHistory: [],
        counter: `${operationSign.pointEnd(state.counter)}.`,
      }
    case persentNumOperation:
      return {
        ...state,
        addHistory: [],
        counter: `${operationSign.putAway(state.counter)}%`,
      }
    case plusminNumOperation:
      return {
        ...state,
        addHistory: [],
        disabledPoint: false,
        counter: operationSign.plusMinOperation(state.counter),
      }
    case evalNumOperation:
      Fetch('/', 'POST', state.counter, operationSign.putFirst(operationSign.endValue(state.counter)))
      // eslint-disable-next-line no-case-declarations
      const result = operationSign.putFirst(operationSign.endValue(state.counter))
      return {
        ...state,
        updateNedeed: state.updateNedeed + 1,
        disabledPoint: false,
        counter: result,
      }
    case deleteHistory:
      deleteRequest(action.expression, action.result)
      return {
        ...state,
        updateNedeed: state.updateNedeed + 1,
        history: updateHistory(state.history),
      }
    case showRenewHistory:
      return {
        ...state,
        history: action.data,
      }
    default:
      return state
  }
}

export default numReducer

import {acNumOperation,delplyNumOperation,evlaNumOperation,minusplyNumOperation,multiplyNumOperation,plusminNumOperation,plusNumOperation,pointNumOperation,procentNumOperation} from "../actions/actions"
import Fetch from "../scripts/dataFetch"
import {OperationSign} from "../scripts/PutAway"
import {retObjType} from "../scripts/valuesNumOperation"

const initialState = {
    history: [],
    counter: ''
}

export const numReducer = (state = initialState, action) => {
    let operationSign = new OperationSign()
    switch (action.type) {
        case retObjType(action.type)().type:
            return {
                ...state,
                counter: state.counter + `${retObjType(action.type)().value}`
            }
        case plusNumOperation:
            let plus = operationSign.putAway(state.counter)
            return {
                ...state,
                counter: plus + '+'
            }
        case acNumOperation:
            return {
                ...state,
                counter: ''
            }
        case multiplyNumOperation:
            let multi = operationSign.putAway(state.counter)
            return {
                ...state,
                counter: multi + '*'
            }
        case minusplyNumOperation:
            let minus = operationSign.putAway(state.counter)
            return {
                ...state,
                counter: minus + '-'
            }
        case delplyNumOperation:
            let del = operationSign.putAway(state.counter)
            return {
                ...state,
                counter: del + '/'
            }
        case pointNumOperation:
            let point = operationSign.putAway(state.counter)
            return {
                ...state,
                counter: point + '.'
            }
        case procentNumOperation:
            let proc = operationSign.putAway(state.counter)
            return {
                ...state,
                counter: proc + '%'
            }
        case plusminNumOperation:
            let key = state.counter
            if (key[key.length - 1] === '+') {
                return {
                    ...state,
                    counter: state.counter.slice(0, key.length - 1) + '-'
                }
            } else if (key[key.length - 1] === '-') {
                return {
                    ...state,
                    counter: state.counter.slice(0, key.length - 1) + '+'
                }
            }
            break
        case evlaNumOperation:
            let tryCatch = operationSign.endValue(state.counter)
            let result = operationSign.putFirst(tryCatch)
            let saveHistory = state.counter
            Fetch('/', 'POST', saveHistory, result)
            state.history.push({
                expression: saveHistory,
                answer: result
            })
            return {
                ...state,
                counter: result
            }
        default:
            return state
    }
}
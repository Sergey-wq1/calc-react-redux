import {
    acNumOperation,
    delplyNumOperation,
    evlaNumOperation,
    minusplyNumOperation,
    multiplyNumOperation,
    plusminNumOperation,
    plusNumOperation,
    pointNumOperation,
    procentNumOperation,
} from "../actions/actions"
import { endValue } from "../scripts/endValue"
import {
    putFirst
} from "../scripts/firstvalue"
import {
    putAway
} from "../scripts/PutAway"
import {
    retObjType
} from "../scripts/valuesNumOperation"

const initialState = {
    history: [],
    counter: ''
}

export const numReducer = (state = initialState, action) => {
    if (action.type === retObjType(action.type)().type) {
        return {
            ...state,
            counter: state.counter + `${retObjType(action.type)().value}`
        }
    }
    if (action.type === plusNumOperation) {
        let plus = putAway(state.counter)
        console.log('2', plus)
        return {
            ...state,
            counter: plus + '+'
        }
    } else if (action.type === acNumOperation) {
        return {
            ...state,
            counter: ''
        }
    } else if (action.type === multiplyNumOperation) {
        let multi = putAway(state.counter)
        console.log('2', multi)
        return {
            ...state,
            counter: multi + '*'
        }
    } else if (action.type === minusplyNumOperation) {
        let minus = putAway(state.counter)
        return {
            ...state,
            counter: minus + '-'
        }
    } else if (action.type === delplyNumOperation) {
        let del = putAway(state.counter)
        return {
            ...state,
            counter: del + '/'
        }
    } else if (action.type === pointNumOperation) {
        let point = putAway(state.counter)
        return {
            ...state,
            counter: point + '.'
        }
    } else if (action.type === procentNumOperation) {
        let proc = putAway(state.counter)
        return {
            ...state,
            counter: proc + '%'
        }
    } else if (action.type === plusminNumOperation) {
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
    } else if (action.type === evlaNumOperation) {
        let tryCatch = endValue(state.counter)
        let result = putFirst(tryCatch)
        let saveHistory = state.counter
        fetch('/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    saveHistory,
                    result
                })
            }).then(res => res.json())
            .then(res => console.log(res));
        state.history.push({
            expression: saveHistory,
            answer: result
        })
        return {
            ...state,
            counter: result
        }
    }
    return state
}
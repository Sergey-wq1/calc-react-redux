import {
  AC,
  EIGHT,
  EVAL,
  FIVE,
  FOUR,
  MINUS,
  MULTIPLY,
  NINE,
  ONE,
  PLUS,
  PLUSMIN,
  POINT,
  persent,
  SEVEN,
  SIX,
  THREE,
  TWO,
  ZERO,
  DELETEHISTORY,
  SHOWRENEWHISTORY,
} from './variables'

export const oneNumOperation = () => ({
  type: ONE,
})

export const twoNumOperation = () => ({
  type: TWO,
})

export const threeNumOperation = () => ({
  type: THREE,
})

export const fourNumOperation = () => ({
  type: FOUR,
})

export const fiveNumOperation = () => ({
  type: FIVE,
})

export const sixNumOperation = () => ({
  type: SIX,
})

export const sevenNumOperation = () => ({
  type: SEVEN,
})

export const eightNumOperation = () => ({
  type: EIGHT,
})

export const nineNumOperation = () => ({
  type: NINE,
})

export const zeroNumOperation = () => ({
  type: ZERO,
})

export const acNumOperation = () => ({
  type: AC,
})

export const evalNumOperation = () => ({
  type: EVAL,
})

export const plusNumOperation = () => ({
  type: PLUS,
})

export const multiplyNumOperation = () => ({
  type: MULTIPLY,
})

export const minusplyNumOperation = () => ({
  type: MINUS,
})

export const delplyNumOperation = () => ({
  type: POINT,
})

export const pointNumOperation = () => ({
  type: POINT,
})

export const persentNumOperation = () => ({
  type: persent,
})

export const plusminNumOperation = () => ({
  type: PLUSMIN,
})

export const deleteHistory = (expression, result) => ({
  type: DELETEHISTORY,
  expression,
  result,
})

export const showRenewHistory = (data) => ({
  type: SHOWRENEWHISTORY,
  data,
})

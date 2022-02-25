import numericStore from '../store/numericStore'

const operation = [
  {
    type: 'AC', data: 'ac', classStyle: 'AC', function: numericStore.deleteAllOperation,
  },
  {
    type: '+/-', data: 'plusMinus', classStyle: 'minplus', function: numericStore.changeSign,
  },
  {
    type: '%', data: 'persent', classStyle: 'persent', function: numericStore.percentOperation,
  },
  {
    type: '/', data: 'del', classStyle: 'del', function: numericStore.devideOperation,
  },

  { type: 7, data: 'seven', classStyle: 'seven' },
  { type: 8, data: 'eight', classStyle: 'eight' },
  { type: 9, data: 'nine', classStyle: 'nine' },
  {
    type: 'x', data: 'multiply', classStyle: 'multi', function: numericStore.multiplyOperation,
  },

  { type: 4, data: 'four', classStyle: 'four' },
  { type: 5, data: 'five', classStyle: 'five' },
  { type: 6, data: 'six', classStyle: 'six' },
  {
    type: '-', data: 'minus', classStyle: 'minus', function: numericStore.minusOperation,
  },

  { type: 1, data: 'one', classStyle: 'one' },
  { type: 2, data: 'two', classStyle: 'two' },
  { type: 3, data: 'three', classStyle: 'three' },
  {
    type: '+', data: 'plus', classStyle: 'plus', function: numericStore.plusOperation,
  },

  { type: 0, data: 'zero', classStyle: 'zero' },
  {
    type: ',', data: 'point', classStyle: 'point', function: numericStore.pointOperation,
  },
  {
    type: '=', data: 'eval', classStyle: 'equal', function: numericStore.evalOperation,
  },
]

export default operation

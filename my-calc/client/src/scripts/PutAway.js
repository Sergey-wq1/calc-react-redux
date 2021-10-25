/* eslint-disable no-plusplus */
/* eslint-disable class-methods-use-this */
import {
  evaluate,
} from 'mathjs'

class OperationSign {
  constructor() {
    this.type = ['+', '-', '*', '/', '.', '%']
    this.typeNoALL = ['*', '/', '.', '%']
    this.typeWithoutPointPercent = ['+', '-', '*', '/']
  }

  putAway(mas) {
    const lengthArray = mas.length - 1
    if (this.type.includes(mas[lengthArray])) {
      return mas.slice(0, lengthArray)
    }
    return mas
  }

  putFirst(mas) {
    if (this.typeNoALL.includes(mas[0])) {
      return 'Ошибка!'
    }
    const result = evaluate(mas)
    return result
  }

  endValue(mas) {
    const lengthArray = mas.length - 1
    if (this.type.includes(mas[lengthArray])) {
      return mas.slice(0, lengthArray)
    }
    return mas
  }

  pointEnd(array) {
    const returndedValue = array.toString()
    const lengthArray = returndedValue.length
    const returnEnd = [returndedValue.slice(0, lengthArray), '0']
    if (returndedValue[lengthArray - 1] > 0) return [...returndedValue.slice(0, lengthArray)].join('')
    return returnEnd.join('')
  }

  plusMinOperation(mas) {
    const NumValue = []
    let result = 0
    let endValue = 0
    for (let i = mas.length - 1; i >= 0; i--) {
      // eslint-disable-next-line no-param-reassign
      if (this.typeWithoutPointPercent.includes(mas[i])) {
        NumValue.push(i)
      }
    }
    result = mas.slice(NumValue[0], mas.length)
    endValue = mas.slice(NumValue[0] + 1, mas.length)
    if (result > 0) return [...mas.slice(0, NumValue[0] + 1), '(', '-', endValue, ')'].join('')
    if (result < 0) return [...mas.slice(0, NumValue[0] + 1), '(', '+', endValue, ')'].join('')
    if (mas < 0) return ['+', ...mas].join('')
    if (mas > 0) return ['-', ...mas].join('')
    return mas
  }
}

export default OperationSign

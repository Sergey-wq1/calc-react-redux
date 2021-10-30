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
    this.onlyMultiplyAndDivision = ['*', '/']
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
    if (returndedValue[lengthArray - 1] >= 0) return [...returndedValue.slice(0, lengthArray)].join('')
    return returnEnd.join('')
  }

  plusMinOperation(arrayNum) {
    const arrayString = arrayNum.toString()
    const NumValue = []
    let result = 0
    let endValue = 0
    for (let i = arrayString.length - 1; i >= 0; i--) {
      // eslint-disable-next-line no-param-reassign
      if (this.typeWithoutPointPercent.includes(arrayString[i])) {
        NumValue.push(i)
      }
    }
    result = arrayString.slice(NumValue[0], arrayString.length)
    endValue = arrayString.slice(NumValue[0] + 1, arrayString.length)
    if (result > 0) return [...arrayString.slice(0, NumValue[0] + 1), '(', '-', endValue, ')'].join('')
    if (result < 0) return [...arrayString.slice(0, NumValue[0] + 1), '(', '+', endValue, ')'].join('')
    if (arrayString[NumValue[0]] === '/' || arrayString[NumValue[0]] === '*') {
      if (endValue > 0) {
        return [...arrayString.slice(0, NumValue[0] + 1), '(', '-', endValue, ')'].join('')
      }
      return [...arrayString.slice(0, NumValue[0] + 1), '(', '+', endValue, ')'].join('')
    }
    if (arrayString < 0) return ['+', ...arrayString].join('')
    if (arrayString > 0) return ['-', ...arrayString].join('')
    return arrayString
  }
}

export default OperationSign

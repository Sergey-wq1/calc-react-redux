import { evaluate } from 'mathjs'

class OperationSign {
  constructor() {
    this.type = ['+', '-', '*', '/', '.', '%']
    this.typeNoALL = ['*', '/', '.', '%']
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
}

export default OperationSign

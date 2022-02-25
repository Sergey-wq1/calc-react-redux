import { evaluate } from 'mathjs'

export const replacementSign = (counter) => {
  const sign = ['+', '-', '*', '/', '.', '%']
  const lengthArray = counter.length - 1
  if (sign.includes(counter[lengthArray])) {
    return counter.slice(0, lengthArray)
  }
  return counter
}

export const forbiddenFirstCharacter = (counter) => {
  const sign = ['*', '/', '.', '%']
  if (sign.includes(counter[0])) {
    return 'Ошибка!'
  }
  return evaluate(counter)
}

export const forbiddenLastCharacter = (counter) => {
  const sign = ['+', '-', '*', '/', '.', '%']
  const lengthArray = counter.length - 1
  if (sign.includes(counter[lengthArray])) {
    return counter.slice(0, lengthArray)
  }
  return counter
}

export const paintPoint = (counter) => {
  const returnValue = counter.toString()
  const lengthArray = returnValue.length
  const returnEnd = [returnValue.slice(0, lengthArray), '0']
  if (returnValue[lengthArray - 1] >= 0) return [...returnValue.slice(0, lengthArray)].join('')
  return returnEnd.join('')
}

export const foundSignIndex = (str) => {
  const arr = []
  for (let i = str.length; i > 0; i -= 1) {
    if (str[i] === '+' || str[i] === '-'
      || str[i] === '*' || str[i] === '/') {
      arr.push(i)
    }
  }
  return arr[0]
}

export const inspectionSigns = (_counter) => {
  const indexSign = foundSignIndex(_counter)
  const sliceHistoryStart = _counter.slice(0, indexSign + 1)
  const sliceHistoryEnd = _counter.slice(indexSign + 1, _counter.length)
  if (indexSign) {
    if (_counter[indexSign - 1] === '(') {
      const sliceStartPlus = sliceHistoryStart.slice(0, indexSign - 1)
      const sliceEndPlus = sliceHistoryEnd.slice(0, sliceHistoryEnd.length - 1)
      return `${sliceStartPlus}${sliceEndPlus}`
    }
    return `${sliceHistoryStart}(-${sliceHistoryEnd})`
  }
  return _counter
}

export const changeSign = (_counter) => {
  const sign = ['+', '-', '/', '*']
  const lengthCounter = _counter.length
  if (_counter[lengthCounter - 1] === '-') {
    const historyCounterPlusEnd = _counter.slice(0, lengthCounter - 1)
    return `${historyCounterPlusEnd}+`
  }
  if (_counter[lengthCounter - 1] === '+') {
    const historyCounter = _counter.slice(0, lengthCounter - 1)
    return `${historyCounter}-`
  } if (!_counter[lengthCounter - 1].includes(sign)) {
    return inspectionSigns(_counter)
  }
  return _counter
}

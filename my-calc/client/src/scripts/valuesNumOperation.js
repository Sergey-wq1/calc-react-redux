import {
  eightNumOperation,
  nineNumOperation,
  fiveNumOperation,
  fourNumOperation,
  oneNumOperation,
  sevenNumOperation,
  sixNumOperation,
  threeNumOperation,
  twoNumOperation,
  zeroNumOperation,
} from '../actions/actions'

const NumberArray = [
  { type: oneNumOperation, value: 1 },
  { type: twoNumOperation, value: 2 },
  { type: threeNumOperation, value: 3 },
  { type: fourNumOperation, value: 4 },
  { type: fiveNumOperation, value: 5 },
  { type: sixNumOperation, value: 6 },
  { type: sevenNumOperation, value: 7 },
  { type: eightNumOperation, value: 8 },
  { type: nineNumOperation, value: 9 },
  { type: zeroNumOperation, value: 0 }]

const returnObjectPropertyTypeValue = ((actionType) => (
  function () {
    const actionValueArray = NumberArray.filter((value) => value.type === actionType)
    const numberArray = actionValueArray.map((vc) => vc.type)
    const numValue = actionValueArray.map((vc) => vc.value)
    return { type: numberArray[0], value: numValue[0] }
  }
))

export default returnObjectPropertyTypeValue

import { acNumOperation, delplyNumOperation, eightNumOperation, evlaNumOperation, fiveNumOperation, fourNumOperation, minusplyNumOperation, multiplyNumOperation, nineNumOperation, oneNumOperation, plusNumOperation, sevenNumOperation, sixNumOperation, threeNumOperation, twoNumOperation, zeroNumOperation } from "../actions/actions"



 const NumberArray = [
    {type: oneNumOperation, value: 1},
    {type: twoNumOperation, value: 2},
    {type: threeNumOperation, value: 3},
    {type: fourNumOperation, value: 4},
    {type: fiveNumOperation, value: 5},
    {type: sixNumOperation, value: 6},
    {type: sevenNumOperation, value: 7},
    {type: eightNumOperation, value: 8},
    {type: nineNumOperation, value: 9},
    {type: zeroNumOperation, value: 0}]

export const retObjType = (actionType) => {
  return function(){
    const num = NumberArray.filter(na => na.type === actionType)
    const numAr = num.map(vc =>{return vc.type})
    const numVal = num.map(vc =>{return vc.value})
    return {type:numAr[0], value: numVal[0]} 
  }
}

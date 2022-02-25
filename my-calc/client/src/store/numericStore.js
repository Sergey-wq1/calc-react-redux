import { action, makeAutoObservable } from 'mobx'
import { evaluate } from 'mathjs'
import {
  changeSign,
  forbiddenFirstCharacter,
  forbiddenLastCharacter,
  foundSignIndex,
  replacementSign,
} from '../helpers/changesOperationsMath'
import saveData from '../api/apiSaveHistory'
import historyStore from './historyStore'

class NumericStore {
  counter = '0'

  constructor() {
    makeAutoObservable(this)
  }

  numericOperation = (number) => {
    if (this.counter === '0' && this.counter.length === 1) {
      this.counter = `${this.counter.slice(1, 2)}${number}`
    } else this.counter = `${this.counter}${number}`
  }

  plusOperation = () => {
    this.counter = `${replacementSign(this.counter)}+`
  }

  minusOperation = () => {
    this.counter = `${replacementSign(this.counter)}-`
  }

  deleteAllOperation = () => {
    this.counter = '0'
  }

  multiplyOperation = () => {
    this.counter = `${replacementSign(this.counter)}*`
  }

  devideOperation = () => {
    this.counter = `${replacementSign(this.counter)}/`
  }

  pointOperation = () => {
    this.counter = `${replacementSign(this.counter)}.`
  }

  percentOperation = () => {
    const indexSign = foundSignIndex(this.counter.slice(0, this.counter.length - 1))
    const startHistory = this.counter.slice(0, indexSign)
    const percent = this.counter.slice(indexSign + 1, this.counter.length)
    const resultBeforePercent = evaluate(startHistory.slice(0, startHistory.length - 1))
    const resultCounter = evaluate((resultBeforePercent / 10) * percent)
    this.counter = resultCounter
  }

  evalOperation = () => {
    const result = forbiddenFirstCharacter((forbiddenLastCharacter(this.counter)))
    saveData(this.counter, result.toString())
      .then(action(() => {
        historyStore.showNewHistory()
      }))
    this.counter = result
  }

  changeSign = () => {
    this.counter = changeSign(this.counter)
  }
}

export default new NumericStore()
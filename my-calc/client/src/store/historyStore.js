import { makeAutoObservable } from 'mobx'
import deleteRequest from '../api/apiDeletehistory'
import updateHistory from '../helpers/updateHistory'
import getHistoryApi from '../api/apiResendHistory'

class HistoryStore {
  history = []

  constructor() {
    makeAutoObservable(this)
  }

  deleteHistoryApi = (expression, result, index) => {
    deleteRequest(expression, result)
      .then(() => {
        this.history = updateHistory(this.history, index)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  showNewHistory = () => {
    getHistoryApi()
      .then((value) => {
        this.history = value.data
      })
  }
}

export default new HistoryStore()
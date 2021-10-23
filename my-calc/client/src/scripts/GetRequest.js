import { showRenewHistory } from '../actions/actions'

class GetRequest {
  static getHistory() {
    return function (dispatch) {
      const data = fetch('/his')
        .then((response) => response.json())
        .then((json) => dispatch({ type: showRenewHistory, data: json }))
      return data
    }
  }
}

export default GetRequest

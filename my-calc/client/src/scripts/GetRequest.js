import { showRenewHistory } from '../actions/actions'

const GetRequest = () => function (dispatch) {
  const data = fetch('/data')
    .then((response) => response.json())
    .then((json) => dispatch({
      type: showRenewHistory,
      data: json,
    }))
  return data
}

export default GetRequest

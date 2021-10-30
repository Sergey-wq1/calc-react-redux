import { showRenewHistory } from '../actions/actions'

const GetRequest = () => function (dispatch) {
  try {
    const data = fetch('/data')
      .then((response) => response.json())
      .then((json) => dispatch({
        type: showRenewHistory,
        data: json,
      }))
    return data
  } catch (error) {
    console.log(error)
  }
  return 'null'
}

export default GetRequest

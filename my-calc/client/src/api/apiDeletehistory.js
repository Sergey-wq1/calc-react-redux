import axios from 'axios'

const deleteRequest = (expression, result) => axios.delete('/', {
  headers: {
    'Content-Type': 'application/json',
  },
  data: {
    expression,
    result,
  },
})

export default deleteRequest

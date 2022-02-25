import axios from 'axios'

const saveData = (expression, result) => axios.post('/', {
  expression,
  result,
})

export default saveData

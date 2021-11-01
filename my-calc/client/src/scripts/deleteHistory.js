const deleteRequest = (expression, result) => {
  fetch('/', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      expression,
      result,
    }),
  })
}

export default deleteRequest

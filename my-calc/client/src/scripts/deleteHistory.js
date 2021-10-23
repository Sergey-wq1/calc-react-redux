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
  }).then((res) => res.json())
}

export default deleteRequest

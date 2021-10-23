const Fetch = (page, method, expression, result) => {
  fetch(page, {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      expression,
      result,
    }),
  }).then((res) => res.json())
}

export default Fetch

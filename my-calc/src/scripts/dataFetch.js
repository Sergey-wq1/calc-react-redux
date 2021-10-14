const Fetch = (page, method, expression, result) => {
    fetch(page, {
            method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                expression,
                result,
            })
        }).then(res => res.json())
        .then(res => console.log(res));
}

export default Fetch
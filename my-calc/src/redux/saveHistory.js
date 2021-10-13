const history = []

export const saved = (expression, result) => {
    const Operation = {
        expression,
        result
    }
    history.push(JSON.stringify(Operation))
}

console.log(history)
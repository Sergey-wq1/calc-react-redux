const {
    evaluate
} = require('mathjs')

export const putFirst = (mas) => {
    console.log(mas)
    if (mas[0] === '/' || mas[0] === '*' ||
        mas[0] === '.' || mas[0] === '%') {
        return 'Ошибка'
    }
    let result = evaluate(mas)
    return result
}
export const endValue = (mas) => {
    let length_ = mas.length - 1
    if (mas[length_] === '+' || mas[length_] === '-' ||
        mas[length_] === '/' || mas[length_] === '*' ||
        mas[length_] === '.' || mas[length_] === '%') {
        return mas.slice(0, length_)
    }
    return mas
}
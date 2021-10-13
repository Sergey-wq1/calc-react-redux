export const typeOperation = (valType) => {
    let type = valType === '/' || valType === 'x' ||
        valType === '+' || valType === '=' ||
        valType === '-'
    return type
}
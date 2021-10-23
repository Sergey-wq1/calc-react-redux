const typeOperation = (valueType) => {
  const type = valueType === '/' || valueType === 'x'
        || valueType === '+' || valueType === '='
        || valueType === '-'
  return type
}

export default typeOperation

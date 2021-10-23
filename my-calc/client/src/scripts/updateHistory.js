const updateHistory = (history) => (
  history.filter((elem, index) => elem !== index)
)

export default updateHistory

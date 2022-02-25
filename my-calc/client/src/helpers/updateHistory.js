const updateHistory = (history, numberButton) => (
  history.filter((elem, index) => index !== numberButton)
)

export default updateHistory

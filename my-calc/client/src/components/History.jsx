import React, { useEffect, useState } from 'react'
import { Grid } from '@mui/material'
import Button from '@mui/material/Button'
import DeleteIcon from '@mui/icons-material/Delete'
import Pagination from '@mui/material/Pagination'
import { useDispatch } from 'react-redux'
import { makeStyles } from '@mui/styles'
import { deleteHistory } from '../actions/actions'
import deleteAnimation from '../scripts/historyAnimationDelete'

const DateNow = new Date().toLocaleDateString()
const TimeNow = new Date().toLocaleTimeString()

const useStyles = makeStyles({
  PaginationFlex: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dodntHistory: {
    margin: 'auto 0',
    fontWeight: 700,
  },
})

const History = ({ history }) => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const historyJSX = history.counter.history.map((historyMap, index) => (
    // eslint-disable-next-line react/no-array-index-key
    <Grid item key={index} sx={{ gridColumn: 'span 2' }}>
      <div sx={{ fontSize: '12px', color: 'black' }}>
        {DateNow}
        {' '}
        {TimeNow}
        {' '}
        операция
        {' '}
        {historyMap.expression}
        =
        {Math.ceil(historyMap.result * 100) / 100}
      </div>
      <div>
        <Button variant="outlined" startIcon={<DeleteIcon />} color="error" onClick={deleteAnimation(dispatch, { type: deleteHistory, expression: historyMap.expression, result: historyMap.result })}>
          Delete
        </Button>
      </div>
    </Grid>
  ))
  const copyHistoryJSX = [...historyJSX]
  const ChangeHistory = (copyHistoryJSX.length === 0)
    ? <div className={classes.dodntHistory}>истории нет</div> : copyHistoryJSX.slice(0, 5)
  const [page, setPage] = useState(ChangeHistory)
  const timesArray = []
  useEffect(() => {
    while (historyJSX.length) {
      timesArray.push(historyJSX.splice(0, 5))
    }
  }, [historyJSX])
  const changesPages = (event, value) => {
    const changeHistoryPages = (timesArray[value - 1] === undefined)
      ? <div className={classes.dodntHistory}>истории нет</div> : timesArray[value - 1]
    setPage(changeHistoryPages)
  }
  return (
    <div className={classes.PaginationFlex}>
      <Grid container spacing={2} sx={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)' }}>
        {page}
      </Grid>
      <Pagination defaultPage={1} color="primary" onChange={changesPages} count={10} />
    </div>
  )
}
export default History

import React from 'react'
import { Grid } from '@mui/material'
import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import { useDispatch } from 'react-redux'
import { deleteHistory } from '../actions/actions'

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))
const DateNow = new Date().toLocaleDateString()
const TimeNow = new Date().toLocaleTimeString()

const History = ({ history }) => {
  const dispatch = useDispatch()
  const historyJSX = history.counter.history.map((historyMap) => (
    <Grid item key={historyMap.id} sx={{ gridColumn: 'span 2' }}>
      <Item sx={{ fontSize: '12px', color: 'black' }}>
        {DateNow}
        {' '}
        {TimeNow}
        {' '}
        операция
        {' '}
        {historyMap.expression}
        =
        {historyMap.result}
      </Item>
      <Item>
        <Button variant="outlined" color="error" onClick={() => dispatch({ type: deleteHistory, expression: historyMap.expression, result: historyMap.result })}>
          Delete
        </Button>
      </Item>
    </Grid>
  ))
  return (
    <div>
      <Grid container spacing={2} sx={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)' }}>
        {historyJSX}
      </Grid>

    </div>
  )
}
export default History

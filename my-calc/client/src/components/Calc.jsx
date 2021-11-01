import Box from '@mui/material/Box'
import React from 'react'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
  display: {
    fontSize: 28,
    width: 'auto',
    whiteSpace: 'normal',
    textAlign: 'right',
    fontWeight: 300,
    height: 90,
  },
})

export const Calc = ({ values, operationArray }) => {
  const classes = useStyles()
  return (
    <div>
      <Box
        className={classes.display}
        component="span"
        sx={{
          bgcolor: '#B0D6DE', border: 1, borderRadius: 4, display: 'block', color: 'black',
        }}
      >
        {values.counter.counter}
      </Box>
      <Box sx={{ width: 300, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>{operationArray}</Box>
    </div>
  )
}

export default Calc

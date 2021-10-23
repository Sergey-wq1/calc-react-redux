import Box from '@mui/material/Box'
import React from 'react'
import '../styles/calc.scss'

export const Calc = ({ values, operationArray }) => (
  <div>
    <Box
      className="display"
      component="span"
      sx={{ bgcolor: 'text.secondary', border: 1, display: 'block' }}
    >
      {values.counter.counter}
    </Box>
    <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }} className="calc-grid">{operationArray}</Box>
  </div>
)

export default Calc

/* eslint-disable no-param-reassign */
import Button from '@mui/material/Button'
import React from 'react'

const ButtonJSX = {
  zero: (operator, i, val) => (
    <Button
      sx={{
        bgcolor: '#B0C4DE', color: 'black', borderRadius: 2, borderColor: 'text.primary', gridRow: '5', width: '100%', gridColumn: 'span 2',
      }}
      variant="outlined"
      size="large"
      key={i}
      onClick={operator}
      className={val.classStyle}
    >
      {val.type}
    </Button>
  ),
  greyButton: (operator, i, val) => (
    <Button
      sx={{
        bgcolor: '#DEC9B0', fontWeight: 700, color: 'black', borderRadius: 2, borderColor: 'text.primary',
      }}
      variant="outlined"
      size="large"
      key={i}
      onClick={operator}
      className={val.classStyle}
    >
      {val.type}
    </Button>
  ),
  rest: (operator, i, val) => (
    <Button
      sx={{
        bgcolor: '#B0C4DE', fontWeight: 700, color: 'black', borderRadius: 2, borderColor: 'text.primary',
      }}
      variant="outlined"
      size="large"
      key={i}
      onClick={operator}
      className={val.classStyle}
    >
      {val.type}
    </Button>
  ),
  blockedPoint: (disable, operator, i, val) => (
    <Button
      sx={{
        bgcolor: '#B0C4DE', fontWeight: 700, color: 'black', borderRadius: 2, borderColor: 'text.primary',
      }}
      variant="outlined"
      size="large"
      key={i}
      // eslint-disable-next-line react/jsx-boolean-value
      disabled={disable}
      onClick={operator}
      className={val.classStyle}
    >
      {val.type}
    </Button>
  ),
}

export default ButtonJSX

import Box from '@mui/material/Box'
import React from 'react'
import { makeStyles } from '@mui/styles'
import { observer } from 'mobx-react'
import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import numericStore from '../../store/numericStore'
import Buttons from './Buttons'

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

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  border: '4px solid #1d2352',
  backgroundColor: '#1d2352',
  width: 270,
}))

export const Calculator = observer(() => {
  const classes = useStyles()

  return (
    <Item>
      <Box
        className={classes.display}
        component="span"
        sx={{
          bgcolor: '#B0D6DE', border: 1, borderRadius: 4, display: 'block', color: 'black', marginBottom: 1,
        }}
      >
        {numericStore.counter}
      </Box>
      <Buttons
        numericOperation={numericStore.numericOperation}
      />
    </Item>
  )
})

export default Calculator

import React, { useCallback, useState } from 'react'
import { Grid } from '@mui/material'
import Button from '@mui/material/Button'
import operation from '../../constans/dataRedux'
import { buttonOperations, buttons, buttonZero } from '../../constans/colorSchemeButtons'
import operations from '../../constans/operations'

const Buttons = (props) => {
  const {
    numericOperation,
  } = props

  const [disabled, setDisabled] = useState(false)

  const checkPoint = useCallback((value) => {
    if (operations.includes(value)) setDisabled(false)
    else if (value === ',') setDisabled(true)
  }, [])

  const handleClick = useCallback((event, recovery) => function () {
    checkPoint(event)
    if (typeof event === 'number') numericOperation(event)
    else if (recovery) recovery()
  }, [])

  const stateArray = useCallback(() => operation.map((val, i) => {
    const checkButton = useCallback((value) => {
      if (value === 0) return buttonZero
      if (typeof value === 'string') return buttonOperations
      return buttons
    }, [])

    const buttonSettings = checkButton(val.type)
    return (
      <Grid key={val.type} item xs={buttonSettings.size}>
        <Button
          sx={{
            bgcolor: buttonSettings.color,
            color: 'white',
            borderRadius: 2,
            borderColor: 'text.primary',
            gridRow: '5',
            width: '100%',
            gridColumn: 'span 2',
          }}
          disabled={val.type === ',' ? disabled : false}
          variant="outlined"
          size="large"
          onClick={handleClick(val.type, val.function)}
          key={i.toString()}
          className={val.classStyle}
        >
          {val.type}
        </Button>
      </Grid>
    )
  }), [disabled])

  return (
    <>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1 }}>
        {stateArray()}
      </Grid>
    </>
  )
}

export default Buttons
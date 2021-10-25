import { connect, useDispatch } from 'react-redux'
import React, { useEffect } from 'react'
import { Grid } from '@mui/material'
import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import Calc from './components/Calc'
import {
  acNumOperation,
  delplyNumOperation,
  eightNumOperation,
  evalNumOperation,
  fiveNumOperation,
  fourNumOperation,
  minusplyNumOperation,
  multiplyNumOperation,
  nineNumOperation,
  oneNumOperation,
  plusminNumOperation,
  plusNumOperation,
  pointNumOperation,
  persentNumOperation,
  sevenNumOperation,
  sixNumOperation,
  threeNumOperation,
  twoNumOperation,
  zeroNumOperation,
} from './actions/actions'
import operationArrayray from './data/dataRedux'
import functions from './data/functions'
import typeOperation from './scripts/buttonCalback'
import History from './components/History'
import ButtonJSX from './scripts/retButJSX'
import GetRequest from './scripts/GetRequest'

function App(props) {
  // eslint-disable-next-line react/destructuring-assignment
  let blockedPoint = props.counter.disabledPoint
  useEffect(() => {
    blockedPoint = props.disabledPoint
  // eslint-disable-next-line react/destructuring-assignment
  }, [blockedPoint])
  const funcOperation = functions(props)
  const dispatch = useDispatch()
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }))

  const stateArray = operationArrayray.map((val, i) => {
    const valType = typeOperation(val.type)
    if (val.type === '0') return ButtonJSX.zero(funcOperation[val.data], i, val)
    if (valType) return ButtonJSX.greyButton(funcOperation[val.data], i, val)
    if (val.type === ',') return ButtonJSX.blockedPoint(blockedPoint, funcOperation[val.data], i, val)
    return ButtonJSX.rest(funcOperation[val.data], i, val)
  })

  useEffect(() => {
    dispatch(GetRequest.getHistory())
  // eslint-disable-next-line react/destructuring-assignment
  }, [props.counter.updateNedeed])

  return (
    <div className="App">
      <Grid container spacing={2}>
        <Grid item>
          <Item><Calc values={props} operationArray={stateArray} /></Item>
        </Grid>
        <Grid item>
          <Item><History history={props} /></Item>
        </Grid>
      </Grid>
    </div>
  )
}

const mapStateToProps = (state) => (
  {
    history: state.history,
    counter: state.num,
  })

const mapDispatchToProps = (dispatch) => (
  {
    one: () => dispatch({ type: oneNumOperation }),
    two: () => dispatch({ type: twoNumOperation }),
    three: () => dispatch({ type: threeNumOperation }),
    four: () => dispatch({ type: fourNumOperation }),
    five: () => dispatch({ type: fiveNumOperation }),
    six: () => dispatch({ type: sixNumOperation }),
    seven: () => dispatch({ type: sevenNumOperation }),
    eight: () => dispatch({ type: eightNumOperation }),
    nine: () => dispatch({ type: nineNumOperation }),
    zero: () => dispatch({ type: zeroNumOperation }),

    ac: () => dispatch({ type: acNumOperation }),
    eval: () => dispatch({ type: evalNumOperation }),
    plus: () => dispatch({ type: plusNumOperation }),
    del: () => dispatch({ type: delplyNumOperation }),
    minus: () => dispatch({ type: minusplyNumOperation }),
    multiply: () => dispatch({ type: multiplyNumOperation }),
    point: () => dispatch({ type: pointNumOperation }),
    persent: () => dispatch({ type: persentNumOperation }),
    plusMinus: () => dispatch({ type: plusminNumOperation }),
  })

export default connect(mapStateToProps, mapDispatchToProps)(App)

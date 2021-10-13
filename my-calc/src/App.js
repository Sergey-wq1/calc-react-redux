import { connect } from "react-redux"
import Calc from "./components/Calc"
import { acNumOperation, delplyNumOperation, eightNumOperation, evlaNumOperation, fiveNumOperation, fourNumOperation, minusplyNumOperation, multiplyNumOperation, nineNumOperation, oneNumOperation, plusminNumOperation, plusNumOperation, pointNumOperation, procentNumOperation, sevenNumOperation, sixNumOperation, threeNumOperation, twoNumOperation, zeroNumOperation } from "./actions/actions";
import { operationAr } from './data/dataRedux'
import functions from './data/functions'
import { typeOperation } from "./scripts/buttonCalback"
import History from "./components/History"
import { ButtonJSX } from "./scripts/retButJSX"
import { Grid } from "@mui/material"
import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'

function App(props) {

const funcOperation = functions(props)

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))

  const stateArray = operationAr.map((val, i) => {
    let valType = typeOperation(val.type)
    if(val.type === '0') {
      return ButtonJSX.zero(funcOperation[val.data], i, val)
    } else if(valType){
      return ButtonJSX.greyButton(funcOperation[val.data], i, val)
    } else {
    return ButtonJSX.rest(funcOperation[val.data], i, val)
  }})

  return (
    <div className="App">
      <Grid container spacing={2}>
      <Grid item>
          <Item><Calc allIn={props} operationAr={stateArray}/></Item>
        </Grid>
        <Grid item>
          <Item><History history={props}/></Item>
        </Grid>
    </Grid>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    history: state.history,
    counter: state.num
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
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
    eval: () => dispatch({ type: evlaNumOperation }),
    plus: () => dispatch({type: plusNumOperation}),
    del: () => dispatch({type: delplyNumOperation}),
    minus: () => dispatch({ type: minusplyNumOperation }),
    multiply: () => dispatch({type: multiplyNumOperation}),
    point: () => dispatch({type: pointNumOperation}),
    procent: () => dispatch({type: procentNumOperation}),
    plusMinus: () => dispatch({type: plusminNumOperation})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)


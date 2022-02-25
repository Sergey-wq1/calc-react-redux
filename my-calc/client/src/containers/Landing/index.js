import React from 'react'
import History from '../../components/History'
import Calculator from '../../components/Calculator/Calculator'

const Landing = (props) => (
  <div style={{
    width: 600,
    height: 370,
    display: 'flex',
    lexDirection: 'row',
  }}
  >
    <Calculator />
    <History />
  </div>
)

export default Landing
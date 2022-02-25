import React, { useCallback, useEffect, useMemo } from 'react'
import { observer } from 'mobx-react'
import styled from 'styled-components'
import { Button } from '@mui/material'
import historyStore from '../store/historyStore'

const Fonts = styled.div`
  font-size: 20px;
  color: #1d2352;
  margin-left: 30px;
`

const Main = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const HistoryRender = styled.div`
  overflow: scroll;
  margin-left: 10px;
  border: 1px solid #1d2352;
`

const History = observer(() => {

  useEffect(() => {
    historyStore.showNewHistory()
  }, [])

  const deleteHistory = useCallback((expression, result, index) => {
    historyStore.deleteHistoryApi(expression, result, index)
  }, [])

  const styleMain = useMemo(() => (historyStore.history.length > 0 ? 'block' : 'none'), [historyStore.history])

  const history = useCallback(() => {
    if (historyStore.history) {
      return historyStore.history.map((value, index) => (
        <Main key={index.toString()}>
          <Fonts>
            {value.expression}
            {' = '}
            {value.result}
          </Fonts>
          <Button
            onClick={() => deleteHistory(value.expression, value.result, index)}
            color="error"
          >
            X
          </Button>
        </Main>
      ))
    }
    return <div>История пуста</div>
  }, [historyStore.history])

  return (
    <HistoryRender style={{ display: styleMain }}>
      {history()}
    </HistoryRender>
  )
})

export default History

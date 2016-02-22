import React from 'react'
import Input from '../input'
import QR from '../qr'
import NothingOnNothing from '../nothing-on-nothing'

const App = ({ store }) => {

  const onInputChange = (e) => {
    store.dispatch({ type: 'word', word: e.target.value })
  }

  return (
    <div className="app">
      <Input onChange={onInputChange} />
      <NothingOnNothing Component={QR} data={store.getState()} />
    </div>
  )
}

export default App


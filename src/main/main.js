import App from '../components/app'
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'

const word = (state = '', action) => {
  switch (action.type) {
    case 'word':
      return action.word
    default:
      return state
  }
}

const store = createStore(word)

const render = () => {
  ReactDOM.render(
    <App store={store} />,
    document.getElementById('root')
  )
}

render()
store.subscribe(render)


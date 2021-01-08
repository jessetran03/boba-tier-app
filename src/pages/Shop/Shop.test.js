import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Shop from './Shop'

it('renders Shop without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <BrowserRouter>
      <Shop />
    </BrowserRouter>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
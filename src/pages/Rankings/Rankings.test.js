import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Rankings from './Rankings'

it('renders Rankings without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <BrowserRouter>
      <Rankings />
    </BrowserRouter>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
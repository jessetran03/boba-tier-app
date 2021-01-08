import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import MyLists from './MyLists'

it('renders MyLists without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <BrowserRouter>
      <MyLists />
    </BrowserRouter>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
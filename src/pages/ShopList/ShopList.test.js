import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import ShopList from './ShopList'

it('renders ShopList without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <BrowserRouter>
      <ShopList />
    </BrowserRouter>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
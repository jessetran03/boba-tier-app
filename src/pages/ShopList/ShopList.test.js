import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import ShopList from './ShopList'
import renderer from 'react-test-renderer'

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

it('render ShopList without data', () => {
  const wrapper = renderer.create(
    <BrowserRouter>
      <ShopList />
    </BrowserRouter>
  )
    .toJSON();
  expect(wrapper).toMatchSnapshot()
})
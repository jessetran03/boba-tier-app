import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Login from './Login'
import renderer from 'react-test-renderer'

it('renders Login without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

it('render Login without data', () => {
  const wrapper = renderer.create(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  )
    .toJSON();
  expect(wrapper).toMatchSnapshot()
})
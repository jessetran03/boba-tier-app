import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Register from './Register'
import renderer from 'react-test-renderer'

it('renders Register without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <BrowserRouter>
      <Register />
    </BrowserRouter>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

it('render Register without data', () => {
  const wrapper = renderer.create(
    <BrowserRouter>
      <Register />
    </BrowserRouter>
  )
    .toJSON();
  expect(wrapper).toMatchSnapshot()
})
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import NavMobile from './NavMobile'
import renderer from 'react-test-renderer'

it('renders NavMobile without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <BrowserRouter>
      <NavMobile />
    </BrowserRouter>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

it('render NavMobile without data', () => {
  const wrapper = renderer.create(
    <BrowserRouter>
      <NavMobile />
    </BrowserRouter>
  )
    .toJSON();
  expect(wrapper).toMatchSnapshot()
})
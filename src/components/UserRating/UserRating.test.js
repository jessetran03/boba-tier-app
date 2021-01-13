import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import UserRating from './UserRating'
import renderer from 'react-test-renderer'

it('renders UserRating without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <BrowserRouter>
      <UserRating />
    </BrowserRouter>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

it('render UserRating without data', () => {
  const wrapper = renderer.create(
    <BrowserRouter>
      <UserRating />
    </BrowserRouter>
  )
    .toJSON();
  expect(wrapper).toMatchSnapshot()
})
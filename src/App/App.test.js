import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import renderer from 'react-test-renderer'

it('renders App without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

it('render App without data', () => {
  const wrapper = renderer.create(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
    .toJSON();
    expect(wrapper).toMatchSnapshot()
  })
import React, { Component } from 'react'
import config from '../../config'
import PropTypes from 'prop-types'
import './Register.css'

export default class Register extends Component {
  state = {
    error: null
  }
  static propTypes = {
    location: PropTypes.object,
    history: PropTypes.object
  }

  handleRegisterSuccess = () => {
    const { location, history } = this.props
    const destination = (location.state || {}).from || '/login'
    history.push(destination)
  }

  handleRegister = e => {
    e.preventDefault()
    const newUser = {
      first_name: e.target['first-name'].value,
      last_name: e.target['last-name'].value,
      user_name: e.target['username'].value,
      password: e.target['password'].value,
    }
    fetch(`${config.API_ENDPOINT}/users`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newUser),
    })
      .then(res => {
        if (!res.ok)
          return res.json().then(e => Promise.reject(e))
        return res.json()
      })
      .then(res =>
        this.handleRegisterSuccess()
      )
      .catch(res => {
        this.setState({ error: res.error })
      })
  };

  render() {
    const { error } = this.state
    return (
      <>
        <form onSubmit={this.handleRegister} className='register'>
          <h2>Sign up</h2>
          <div role='alert'>
            {error && <p className='form-error'>{error}</p>}
          </div>
          <label htmlFor='first-name-input'>
            First Name:
          </label>
          <input type='text' id='first-name-input' name='first-name' />
          <br />
          <label htmlFor='last-name-input'>
            Last Name:
          </label>
          <input type='text' id='last-name-input' name='last-name' />
          <br />
          <label htmlFor='username-input'>
            Username:
          </label>
          <input type='text' id='username-input' name='username' />
          <br />
          <label htmlFor='password-input'>
            Password:
          </label>
          <input type='password' id='password-input' name='password' />
          <br />
          <button type='submit'>
            Create account
          </button>

        </form>
      </>
    )
  }
}
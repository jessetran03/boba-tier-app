import React, { Component } from 'react'
import { Link } from 'react-router-dom'
//import TokenService from '../services/token-service'
import './Login.css'

export default class Login extends Component {
  state = {
    error: null
  }

  render() {
    const { error } = this.state
    return (
      <section className='login'>
        <form onSubmit={this.handleLogin} className='sign-form'>
          <h2>Sign in</h2>
          <div>
            {error && <p className='form-error'>{error}</p>}
          </div>
          <label htmlFor='username-input'>
            Username:
          </label>
          <input type='text' id='username-input' name='username' />
          <br />
          <label htmlFor='password-input' className='password-label'>
            Password:
          </label>
          <input type='password' id='password-input' name='password' />
          <br />
          <button
            type='submit'
          >
            Log in
          </button>
          <Link to='/register'>
            <button className='sign-up-button'>Sign Up</button>
          </Link>
        </form>
      </section>
    )
  }
}
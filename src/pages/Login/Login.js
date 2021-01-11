import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TokenService from '../../services/token-service'
import config from '../../config'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Login.css'

export default class Login extends Component {
  state = {
    error: null,
    loading: false,
  }
  static defaultProps = {
    location: {},
    history: { push: () => {} },
  }

  handleLoginSuccess = () => {
    const { location, history } = this.props
    const destination = (location.state || {}).from || '/'
    history.push(destination)
  }

  handleLogin = e => {
    e.preventDefault()
    this.setState({ 
      error: null,
      loading: true,
    })
    const login = {
      user_name: e.target['username'].value,
      password: e.target['password'].value,
    }
    fetch(`${config.API_ENDPOINT}/auth/login`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(login),
    })
      .then(res => {
        if (!res.ok)
          return res.json().then(e => Promise.reject(e))
        return res.json()
      })
      .then(res => {
        TokenService.saveAuthToken(res.authToken)
        this.setState({ loading: false })
        this.handleLoginSuccess()
      })
      .catch(res => {
        this.setState({ 
          error: res.error,
          loading: false,
        })
      })
  };

  render() {
    const { error, loading } = this.state
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
          <input type='text' className='username-input' id='username-input' name='username' autoFocus />
          <br />
          <label htmlFor='password-input' className='password-label'>
            Password:
          </label>
          <input type='password' className='password-input' id='password-input' name='password' />
          <br />
          <button
            type='submit'
          >
            Log in
          </button>
          <Link to='/register'>
            <button className='sign-up-button'>Sign up</button>
          </Link>
        </form>
        <div>
          {loading && <FontAwesomeIcon className='spinner' icon='spinner' spin />}
        </div>
      </section>
    )
  }
}
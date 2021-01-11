import React, { Component } from 'react'
import drink1 from './boba-drink-1.jpg'
import drink2 from './boba-drink-2.jpg'
import drink3 from './boba-drink-3.jpg'
import config from '../../config'
import TokenService from '../../services/token-service'

import './Landing.css'

export default class Landing extends Component {
  state = {
    error: null,
  }

  handleLoginSuccess = () => {
    const { location, history } = this.props
    const destination = (location.state || {}).from || '/'
    history.push(destination)
  }

  handleDemo = e => {
    e.preventDefault()
    this.setState({ error: null })
    const login = {
      user_name: 'Boba Guest',
      password: 'BobaGuest1!',
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
        this.handleLoginSuccess()
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
  };

  renderLoggedOut() {
    return (
      <section className='landing-page'>
        <section className="landing">
          <h2>Rate the Best Boba Tea in Town!</h2>
          <p className='boba-description'>
            Boba Tier lets you rate all the drinks in boba shops by city.
            Along with keeping track of all the drinks you previously rated,
            you will also be able to see which drinks are the highest rated for that city.
            You can also leave comments on the shop pages expressing your thoughts about their drinks.
            Get started by using the navigation pane or click on demo to try it out as a guest!
          </p>
          <button onClick={this.handleDemo} className='demo'>
            Demo
          </button>
          <p className='city-notice'>
            Boba Tier is currently available for shops in Houston, TX. More cities will be added in the future!
          </p>
        </section>
        <section className='landing-info'>
          <img src={drink2} alt='boba drink 2' className='landing-image' />
          <img src={drink1} alt='boba drink 1' className='landing-image' />
          <img src={drink3} alt='boba drink 3' className='landing-image' />
        </section>
      </section>
    )
  }

  renderLoggedIn() {
    return (
      <section className='landing-page'>
        <section className="landing">
          <h2>Rate the Best Boba Tea in Town!</h2>
          <p className='boba-description'>
            Boba Tier lets you rate all the drinks in boba shops by city.
            Along with keeping track of all the drinks you previously rated,
            you will also be able to see which drinks are the highest rated for that city.
            You can also leave comments on the shop pages expressing your thoughts about their drinks.
            Get started by using the navigation pane!

          </p>
          <p className='city-notice'>
            Boba Tier is currently available for shops in Houston, TX. More cities will be added in the future!
          </p>
        </section>
        <section className='landing-info'>
          <img src={drink2} alt='boba drink 2' className='landing-image' />
          <img src={drink1} alt='boba drink 1' className='landing-image' />
          <img src={drink3} alt='boba drink 3' className='landing-image' />
        </section>
      </section>
    )
  }

  render() {
    return (
      <>
        {TokenService.hasAuthToken()
          ? this.renderLoggedIn()
          : this.renderLoggedOut()
        }
      </>
    )
  }
}
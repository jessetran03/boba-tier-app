import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
//import TokenService from '../services/token-service'
import './Landing.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Landing extends Component {

  /*  renderLoggedOut() {
      return(
        <div><Link to='/register'><h3 className='get-started-link'>Sign Up</h3></Link></div>
      )
    }
  
    renderLoggedIn() {
      return(
        <div><Link to='/workouts'><h3 className='get-started-link'>Get Started!</h3></Link></div>
      )
    }
  */
  render() {
    return (
      <section>
        <section className="landing">
          Rate the best boba tea in town. Pick a city to get started.
        </section>
        <ul className="landing-cities">
          <li><button>Houston</button></li>
          <li><button>Dallas</button></li>
          <li><button>San Francisco</button></li>
        </ul>
        <p>More cities to come later!</p>
        <FontAwesomeIcon className='star' icon='star' />
        <FontAwesomeIcon className='star' icon={['far', 'star']} />
        <FontAwesomeIcon className='check-square' icon='check-square' />
        <FontAwesomeIcon className='check-square' icon={['far', 'check-square']} />
        <FontAwesomeIcon className='heart' icon='heart' />
        <FontAwesomeIcon className='heart' icon={['far', 'heart']} />
        <FontAwesomeIcon icon='angle-down' />
      </section>
    )
  }
}
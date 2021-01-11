import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Landing.css'

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
      <section className='landing-page'>
        <h2>Welcome!</h2>
        <section className="landing">
          Rate the best boba tea in town. Pick a city to get started.
        </section>
        <ul className="landing-cities">
          <li key='1'>
            <Link to='/shops'>
              <button>Houston</button>
            </Link>
          </li>
        </ul>
        <p>More cities to come later!</p>
      </section>
    )
  }
}
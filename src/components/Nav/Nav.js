import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'
// import TokenService from '../services/token-service'
import './Nav.css'
// import config from '../config'

export default class Nav extends Component {
  state = {
    currentCity: ''
  }

  handleLogoutClick = () => {
    console.log('Successfully logged out!')
  }

  render() {
    return (
      <nav>
        <div className='nav-header'>
          <Link to='/'>
            <h2>Boba Tier</h2>
          </Link>
        </div>
        <section className='nav-links'>
            <NavLink exact to='/' activeClassName='active'>
              <p>Home</p>
            </NavLink>
            <NavLink to='/lists' activeClassName='active'>
              <p>My Lists</p>
            </NavLink>
            <NavLink to='/shops' activeClassName='active'>
              <p>Shop List</p>
            </NavLink>
            <NavLink to='/rankings' activeClassName='active'>
              <p>Rankings</p>
            </NavLink>
            <NavLink to='/shop/sharetea-houston' activeClassName='active'>
              <p>Sharetea (example shop)</p>
            </NavLink>
            <select>
              <option value='Houston'>Houston</option>
              <option value='Austin'>Austin</option>
              <option value='Dallas'>Dallas</option>
              <option value='San Francisco'>San Francisco</option>
            </select>
            <NavLink to='/login' activeClassName='active'>
              <p>Log In</p>
            </NavLink>
            <Link onClick={this.handleLogoutClick} to='/'>
              <p>Log Out</p>
            </Link>
            <NavLink to='/register' activeClassName='active'>
              <p>Sign Up</p>
            </NavLink>
        </section>
      </nav>
    )
  }
}
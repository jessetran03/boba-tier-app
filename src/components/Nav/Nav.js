import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'
import TokenService from '../../services/token-service'
// import config from '../config'
import './Nav.css'

export default class Nav extends Component {
  state = {
    currentCity: ''
  }

  handleLogoutClick = () => {
    TokenService.clearAuthToken()
  }

  renderLoggedIn() {
    return (
      <>
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
          <NavLink to='/shops/2' activeClassName='active'>
            <p>Sharetea</p>
          </NavLink>
          <select>
            <option value='Houston'>Houston</option>
            <option value='Austin'>Austin</option>
            <option value='Dallas'>Dallas</option>
            <option value='San Francisco'>San Francisco</option>
          </select>
          <Link onClick={this.handleLogoutClick} to='/'>
            <p>Log Out</p>
          </Link>
      </>
    )
  }

  renderLoggedOut() {
    return (
      <>
          <NavLink exact to='/' activeClassName='active'>
            <p>Home</p>
          </NavLink>
          <NavLink to='/shops' activeClassName='active'>
            <p>Shop List</p>
          </NavLink>
          <NavLink to='/rankings' activeClassName='active'>
            <p>Rankings</p>
          </NavLink>
          <NavLink to='/shops/2' activeClassName='active'>
            <p>Sharetea</p>
          </NavLink>
          <select>
            <option value='Houston'>Houston</option>
          </select>
          <NavLink to='/login' activeClassName='active'>
            <p>Log In</p>
          </NavLink>
          <NavLink to='/register' activeClassName='active'>
            <p>Sign Up</p>
          </NavLink>
      </>
    )
  }

  render() {
    return (
      <nav>
        <section className='nav-header'>
          <Link to='/'>
            <h2>Boba Tier</h2>
          </Link>
        </section>
        <section className='nav-links'>
          {TokenService.hasAuthToken()
            ? this.renderLoggedIn()
            : this.renderLoggedOut()
          }
        </section>
      </nav>
    )
  }
}
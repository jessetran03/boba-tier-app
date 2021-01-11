import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'
import TokenService from '../../services/token-service'
import logo from './boba-tier-green.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import NavMobile from './NavMobile'
// import config from '../config'
import './Nav.css'

export default class Nav extends Component {
  state = {
    navOpen: false,
  }

  handleMobileNav = () => {
    this.state.navOpen
      ? this.setState ({ navOpen: false })
      : this.setState ({ navOpen: true })
  }

  handleLogoutClick = () => {
    TokenService.clearAuthToken()
  }

  renderLoggedIn() {
    return (
      <>  
        <section className='desktop-nav'>
          <NavLink exact to='/' activeClassName='active'>
            <p>Home</p>
          </NavLink>
          <NavLink to='/shops' activeClassName='active'>
            <p>Shop List</p>
          </NavLink>
          <NavLink to='/rankings' activeClassName='active'>
            <p>Top 10</p>
          </NavLink>
          <NavLink to='/lists' activeClassName='active'>
            <p>My Ratings</p>
          </NavLink>
          <select>
            <option value='Houston'>Houston, TX</option>
          </select>
          <Link onClick={this.handleLogoutClick} to='/'>
            <p>Log Out</p>
          </Link>
        </section>
        <section className='mobile-nav'>
          <FontAwesomeIcon onClick={this.handleMobileNav} className='bars' icon='bars' />
        </section>
      </>
    )
  }

  renderLoggedOut() {
    return (
      <>
        <section className='desktop-nav'>
          <NavLink exact to='/' activeClassName='active'>
            <p>Home</p>
          </NavLink>
          <NavLink to='/shops' activeClassName='active'>
            <p>Shop List</p>
          </NavLink>
          <NavLink to='/rankings' activeClassName='active'>
            <p>Top 10</p>
          </NavLink>
          <select>
            <option value='Houston'>Houston, TX</option>
          </select>
          <NavLink to='/login' activeClassName='active'>
            <p>Log In</p>
          </NavLink>
          <NavLink to='/register' activeClassName='active'>
            <p>Sign Up</p>
          </NavLink>
        </section>
        <section className='mobile-nav'>
          <FontAwesomeIcon onClick={this.handleMobileNav} className='bars' icon='bars' />
        </section>
      </>
    )
  }

  render() {
    return (
      <>
        <nav>
          <section className='nav-header'>
            <Link to='/'>
              <img src={logo} alt="Boba Tier Logo" />
            </Link>
          </section>
          <section className='nav-links'>
            {TokenService.hasAuthToken()
              ? this.renderLoggedIn()
              : this.renderLoggedOut()
            }
          </section>
        </nav>
        {this.state.navOpen && 
        <>
          <NavMobile 
            onHandleNav={this.handleMobileNav} 
            onHandleLogout={this.handleLogoutClick}
          />
          </>
        }
      </>
    )
  }
}
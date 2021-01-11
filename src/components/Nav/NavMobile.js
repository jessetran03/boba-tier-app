import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'
import TokenService from '../../services/token-service'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import config from '../config'
import './NavMobile.css'

export default class NavMobile extends Component {

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClick, false);
  }

  handleClick = (e) => {
    if (this.node.contains(e.target)) {
      return;
    }
    this.props.onHandleNav();
  }

  handleNavClick = () => {
    this.props.onHandleNav();
  }

  handleLogoutClick = () => {
    this.props.onHandleLogout()
    this.props.onHandleNav()
  }

  renderLoggedIn() {
    return (
      <>
          <NavLink exact to='/' onClick={this.handleNavClick} activeClassName='active'>
            <p>Home</p>
          </NavLink>
          <hr />
          <NavLink to='/shops' onClick={this.handleNavClick} activeClassName='active'>
            <p>Shop List</p>
          </NavLink>
          <hr />
          <NavLink to='/rankings' onClick={this.handleNavClick} activeClassName='active'>
            <p>Top 10 Drinks</p>
          </NavLink>
          <hr />
          <NavLink to='/lists' onClick={this.handleNavClick} activeClassName='active'>
            <p>My Ratings</p>
          </NavLink>
          <hr />
          <Link onClick={this.handleLogoutClick} to='/' >
            <p>Log Out</p>
          </Link>
      </>
    )
  }

  renderLoggedOut() {
    return (
      <>
        <NavLink exact to='/' onClick={this.handleNavClick} activeClassName='active' >
          <p>Home</p>
        </NavLink>
        <hr />
        <NavLink to='/shops' onClick={this.handleNavClick} activeClassName='active'>
          <p>Shop List</p>
        </NavLink>
        <hr />
        <NavLink to='/rankings' onClick={this.handleNavClick} activeClassName='active'>
          <p>Top 10 Drinks</p>
        </NavLink>
        <hr />
        <NavLink to='/login' onClick={this.handleNavClick} activeClassName='active'>
          <p>Log In</p>
        </NavLink>
        <hr />
        <NavLink to='/register' onClick={this.handleNavClick} activeClassName='active'>
          <p>Sign Up</p>
        </NavLink>
      </>
    )
  }

  render() {
    return (
      <section ref={node => this.node = node} className='mobile-nav-links mobile-nav'>
        {TokenService.hasAuthToken()
          ? this.renderLoggedIn()
          : this.renderLoggedOut()
        }
      </section>
    )
  }
}
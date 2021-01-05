import React, { Component } from 'react'
import './ListDrink.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import TokenService from '../services/token-service'
// import config from '../config'

export default class ListDrink extends Component {
  state = {
    open: false
  }

  handleClickOpen = () => {
    this.setState({ open: true })
  }

  handleClickClose = () => {
    this.setState({ open: false })
  }

  renderClosed() {
    return (
      <div onClick={this.handleClickOpen} className='open'>
        <FontAwesomeIcon className='angle' icon='angle-down' pull='left' />
        &nbsp;
        {this.props.drink}
      </div>
    )
  }

  renderOpened() {
    return (
      <div>
        <span onClick={this.handleClickClose} className='open'>
          <FontAwesomeIcon className='angle' icon='angle-up' pull='left' />
            &nbsp;
            {this.props.drink}
        </span>
        <br /><br />
        <FontAwesomeIcon className='star' icon={['far', 'star']} />
        <FontAwesomeIcon className='star' icon={['far', 'star']} />
        <FontAwesomeIcon className='star' icon={['far', 'star']} />
        <FontAwesomeIcon className='star' icon={['far', 'star']} />
        <FontAwesomeIcon className='star' icon={['far', 'star']} />
      </div>
    )
  }

  render() {
    return (
      <>
        {this.state.open
          ? this.renderOpened()
          : this.renderClosed()
        }
      </>
    )
  }
}
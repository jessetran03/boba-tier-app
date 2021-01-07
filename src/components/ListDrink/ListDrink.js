import React, { Component } from 'react'
import UserRating from '../UserRating/UserRating'
import './ListDrink.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
        {this.props.rating && <FontAwesomeIcon className='check-square' icon='check-square' pull='right' />}
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
            {this.props.rating && <FontAwesomeIcon className='check-square' icon='check-square' pull='right'/>}
        </span>
        <br /><br />
        <UserRating
          drinkId={this.props.id}
          ratingId={this.props.ratingId}
          rating={this.props.rating}
          onGetDrinks={this.props.onGetDrinks}
        />
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
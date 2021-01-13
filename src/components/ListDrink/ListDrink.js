import React, { Component } from 'react'
import UserRating from '../UserRating/UserRating'
import './ListDrink.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logo from '../../images/blue-boba.png'
import PropTypes from 'prop-types'

export default class ListDrink extends Component {
  state = {
    open: false
  }
  static propTypes = {
    id: PropTypes.number,
    ratingId: PropTypes.number,
    rating: PropTypes.number,
    onGetUserDrinks: PropTypes.func,
  }

  handleClickOpen = () => {
    this.setState({ open: true })
  }

  handleClickClose = () => {
    this.setState({ open: false })
  }

  renderClosed() {
    return (
      <li key={this.props.id} onClick={this.handleClickOpen} className='closed-drink'>
        <div className='drink-tab'>
          <FontAwesomeIcon className='angle' icon='angle-down' />
          <div className='shop-list-drink-name'>
            {this.props.drink}
          </div>
          {this.props.rating
            ? <img src={logo} alt='boba tier logo' />
            : <div>&nbsp;</div>
          }
        </div>
      </li>
    )
  }

  renderOpened() {
    return (
      <li key={this.props.id} className='open-drink'>
        <div onClick={this.handleClickClose} className='drink-tab'>
          <div>
            <FontAwesomeIcon className='angle' icon='angle-up' />
          </div>
          <div className='shop-list-drink-name'>
            {this.props.drink}
          </div>
          {this.props.rating
            ? <img src={logo} alt='boba tier logo' />
            : <div>&nbsp;</div>
          }
        </div>
        <div className='user-rating'>
          <UserRating
            drinkId={this.props.id}
            ratingId={this.props.ratingId}
            rating={this.props.rating}
            onGetUserDrinks={this.props.onGetUserDrinks}
          />
        </div>
      </li>
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
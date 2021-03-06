import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import TokenService from '../../services/token-service'
import config from '../../config'
import PropTypes from 'prop-types'

export default class Rating extends Component {
  static propTypes = {
    onGetUserDrinks: PropTypes.func,
    rating: PropTypes.number,
    drinkId: PropTypes.number,
    ratingId: PropTypes.number,
  }

  updateRating = rating => () => {
    const { ratingId } = this.props
    const newRating = { rating }
    fetch(`${config.API_ENDPOINT}/ratings/${ratingId}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify(newRating),
    })
      .then(res => {
        if (!res.ok)
          return res.json().then(e => Promise.reject(e))
        return res.json()
      })
      .then(rating => {
        this.props.onGetUserDrinks()
      })
      .catch(error => {
        console.error({ error })
      })
  }

  postRating = rating => () => {
    const { drinkId } = this.props
    const newRating = {
      rating: rating,
      drink_id: drinkId,
    }
    TokenService.hasAuthToken() &&
      fetch(`${config.API_ENDPOINT}/ratings`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'authorization': `bearer ${TokenService.getAuthToken()}`
        },
        body: JSON.stringify(newRating),
      })
        .then(res => {
          if (!res.ok)
            return res.json().then(e => Promise.reject(e))
          return res.json()
        })
        .then(rating => {
          this.props.onGetUserDrinks()
        })
        .catch(error => {
          console.error({ error })
        })
  }

  renderRated() {
    const rated = [];
    for (let i = 0; i < this.props.rating; i++) {
      rated.push(
        <FontAwesomeIcon
          key={i + 1}
          onClick={this.updateRating(i + 1)}
          className='user-star'
          icon='star'
        />
      )
    }
    for (let i = this.props.rating; i < 5; i++) {
      rated.push(
        <FontAwesomeIcon
          key={i + 1}
          onClick={this.updateRating(i + 1)}
          className='user-star'
          icon={['far', 'star']}
        />
      )
    }
    return rated
  }

  renderUnrated() {
    const unrated = [];
    for (let i = 0; i < 5; i++) {
      unrated.push(
        <FontAwesomeIcon
          key={i + 1}
          onClick={this.postRating(i + 1)}
          className='user-star'
          icon={['far', 'star']}
        />
      )
    }
    return unrated;
  }

  render() {
    return (
      <>
        {this.props.rating
          ? this.renderRated()
          : this.renderUnrated()
        }
      </>
    )
  }
}
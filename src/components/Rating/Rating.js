import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Rating.css'
import PropTypes from 'prop-types'

export default class Rating extends Component {
  static defaultProps = {
    rating: 0
  }
  static propTypes = {
    rating: PropTypes.number,
  }

  render() {
    const rated = [];
    for (let i = 0; i < this.props.rating; i++) {
      rated.push(<FontAwesomeIcon key={i+1} className='star-rated' icon='star' />)
    }
    for (let i = this.props.rating; i < 5; i++) {
      rated.push(<FontAwesomeIcon key={i+1} className='star-unrated' icon='star' />)
    }
    return rated;
  }
}
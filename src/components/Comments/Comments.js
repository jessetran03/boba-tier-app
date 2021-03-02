import React, { Component } from 'react'
import './Comments.css'
import config from '../../config'
import TokenService from '../../services/token-service'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import moment from 'moment';
import PropTypes from 'prop-types'

export default class Comments extends Component {
  state = {
    comments: []
  }
  static propTypes = {
    shopId: PropTypes.number,
  }

  componentDidMount() {
    this.getComments()
  }

  getComments = () => {
    const shopId = this.props.shopId
    return fetch(`${config.API_ENDPOINT}/shops/${shopId}/comments`, {
      method: 'GET',
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
      .then((comments) => {
        this.setState({ comments })
      })
      .catch(error => {
        console.error({ error })
      })
  }

  handlePostComment = e => {
    e.preventDefault()
    const shopId = this.props.shopId
    const text = e.target['text'].value
    fetch(`${config.API_ENDPOINT}/comments`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        shop_id: shopId,
        text,
      }),
    })
      .then(res => {
        if (!res.ok)
          return res.json().then(e => Promise.reject(e))
        return res.json()
      })
      .then(() => {
        e.target['text'].value = ''
      })
      .then(() => {
        this.getComments()
      })
      .catch(error => {
        console.error({ error })
      })
  }

  render() {
    const comments = this.state.comments
    return (
      <section className='shop-comments'>
        <h3>Comments</h3>
        {comments.length === 0 &&
          <p><i>Be the first to comment!</i></p>
        }
        <ul className='shop-comment-list'>
          {comments
            .sort((a, b) => a.date_created < b.date_created ? 1 : -1 )
            .map(comment =>
              <li key={comment.id}>
                <h4>
                  <FontAwesomeIcon className='user' icon='user' />
                  {comment.user.user_name}
                </h4>
                <h5>{moment(comment.date_created).format('dddd, MMMM Do, YYYY')}</h5>
                <p>{comment.text}</p>
              </li>
          )}
        </ul>
        <form onSubmit={this.handlePostComment}>
          <textarea
            required
            name='text'
            id='text'
            placeholder='Write a comment here'
            maxLength='500'
          />
          <br />
          <button type='submit'>
            Post Comment
            </button>
        </form>
      </section>
    )
  }
}

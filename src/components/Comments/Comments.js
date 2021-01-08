import React, { Component } from 'react'
import './Comments.css'
import config from '../../config'
import TokenService from '../../services/token-service'
import moment from 'moment';

export default class Comments extends Component {
  state = {
    comments: []
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

  handleAddComment = e => {
    e.preventDefault()
    console.log('Successfully posted comment')
  }

  render() {
    const comments = this.state.comments
    return (
      <>
        <section className="shop-comments">
          <h3>Comments / Reviews</h3>
          <form onSubmit={this.handlePostComment}>
            <textarea
              required
              name='text'
              id='text'
              maxLength="500"
            />
            <br />
            <button
              type='submit'
            >Leave a review</button>
          </form>
          <ul>
            {comments.map(comment => 
              <li key={comment.id}>
                <p>{comment.user.user_name}</p>
                <p>{comment.text}</p>
                <p>{moment(comment.date_created).format('MM-DD-YYYY')}</p>
              </li>
            )}
          </ul>
        </section>
      </>
    )
  }
}

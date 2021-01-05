import React, { Component } from 'react'
import './Comments.css'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import config from '../config'
// import TokenService from '../services/token-service'

export default class Comments extends Component {


  handleAddComment = e => {
    e.preventDefault()
    console.log('Successfully posted comment')
  }

  render() {
    return (
      <>

        <section className="shop-comments">
          <h3>Comments / Reviews</h3>
          <form onSubmit={this.handleAddComment}>
            <textarea 
              required
              maxLength="500"
            />
            <br />
            <button
              type='submit'
            >Leave a review</button>
          </form>
          <ul>
            <li>
              <p>Boba-user-365:</p>
              <p>
                The Kiwi Fruit Tea was my favorite drink in the store. Definitely a must try! Not too sweet and very tasteful.
              </p>
              <p>August 15, 2019</p>
            </li>
            <li>
              <p>matcha-lover:</p>
              <p>
                The matcha with fresh milk was alright
              </p>
              <p> August 30, 2019</p>
            </li>
          </ul>
        </section>
      </>
    )
  }
}

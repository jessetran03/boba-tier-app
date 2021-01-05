import React, { Component } from 'react'
import './MyLists.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import STORE from '../../STORE'
// import config from '../config'
// import TokenService from '../services/token-service'

export default class Rankings extends Component {
  state = {
    shops: STORE.shops,
  }

  render() {
    const shops = this.state.shops
    return (
      <>
      <h2>My Lists</h2>
      <section className="my-lists">
        <section className="my-favorites">
          <h3>My Top Rated</h3>
          <ol>
            <li>
              <h4>Brown Sugar Boba Milk with Cream Mousse</h4>
              <FontAwesomeIcon className='star' icon='star' />
              <FontAwesomeIcon className='star' icon='star' />
              <FontAwesomeIcon className='star' icon='star' />
              <FontAwesomeIcon className='star' icon='star' />
              <FontAwesomeIcon className='star' icon={['far', 'star']} />
              <p><i>Tiger Sugar</i></p>
            </li>
            <li>
              <h4>Japanese Matcha Soy Tea</h4>
              <FontAwesomeIcon className='star' icon='star' />
              <FontAwesomeIcon className='star' icon='star' />
              <FontAwesomeIcon className='star' icon='star' />
              <FontAwesomeIcon className='star' icon='star' />
              <FontAwesomeIcon className='star' icon={['far', 'star']} />
              <p><i>7 Leaves Cafe</i></p>
            </li>
            <li>
              <h4>Okinawa Milk Tea</h4>
              <FontAwesomeIcon className='star' icon='star' />
              <FontAwesomeIcon className='star' icon='star' />
              <FontAwesomeIcon className='star' icon='star' />
              <FontAwesomeIcon className='star' icon='star' />
              <FontAwesomeIcon className='star' icon={['far', 'star']} />
              <p><i>Sharetea</i></p>
            </li>
            <li>
              <h4>Brown Sugar Boba Milk with Cream mousse</h4>
              <FontAwesomeIcon className='star' icon='star' />
              <FontAwesomeIcon className='star' icon='star' />
              <FontAwesomeIcon className='star' icon='star' />
              <FontAwesomeIcon className='star' icon='star' />
              <FontAwesomeIcon className='star' icon={['far', 'star']} />
              <p><i>Tiger Sugar</i></p>
            </li>
            <li>
              <h4>Milk Tea with Boba</h4>
              <FontAwesomeIcon className='star' icon='star' />
              <FontAwesomeIcon className='star' icon='star' />
              <FontAwesomeIcon className='star' icon='star' />
              <FontAwesomeIcon className='star' icon='star' />
              <FontAwesomeIcon className='star' icon={['far', 'star']} />
              <p><i>Gongcha</i></p>
            </li>
          </ol>
        </section>
        <section className="my-favorites">
          <h3>My Favorites</h3>
          <ol>
            <li>
              <h4>Brown Sugar Boba Milk with Cream Mousse</h4>
              <FontAwesomeIcon className='heart' icon='heart' />
              <p><i>Tiger Sugar</i></p>
            </li>
            <li>
              <h4>Japanese Matcha Soy Tea</h4>
              <FontAwesomeIcon className='heart' icon='heart' />
              <p><i>7 Leaves Cafe</i></p>
            </li><li>
              <h4>Okinawa Milk Tea</h4>
              <FontAwesomeIcon className='heart' icon='heart' />
              <p><i>Sharetea</i></p>
            </li><li>
              <h4>Brown Sugar Boba Milk with Cream mousse</h4>
              <FontAwesomeIcon className='heart' icon='heart' />
              <p><i>Tiger Sugar</i></p>
            </li>
            <li>
              <h4>Milk Tea with Boba</h4>
              <FontAwesomeIcon className='heart' icon='heart' />
              <p><i>Gongcha</i></p>
            </li>
          </ol>
        </section>
      </section>
      </>
    )
  }
}

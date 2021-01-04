import React, { Component } from 'react'
import Comments from '../../components/Comments/Comments'
import './Shop.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import config from '../config'
// import TokenService from '../services/token-service'

export default class Shop extends Component {
  state = {
    drinks: [],
  }

  render() {
    return (
      <>
        <h2>Sharetea</h2>
        <section className="shop-tea-ranking">
          <h3>Top 5 Drinks</h3>
          <ol>
            <li>Classic Milk Tea</li>
            <li>Lime Mojito</li>
            <li>Peach Kiwi Tea with Aiyu Jelly</li>
            <li>Thai Tea Ice Blended with Pearl</li>
            <li>QQ Happy Family Milk Tea</li>
          </ol>
        </section>
        <section className="shop-tea-list">
          <h3>List of drinks:</h3>
          <ul>
            <li>
              <div>
                <FontAwesomeIcon icon='angle-up' />
                Classic Milk Tea
                <br />
                <FontAwesomeIcon className='star' icon={['far', 'star']} />
                <FontAwesomeIcon className='star' icon={['far', 'star']} />
                <FontAwesomeIcon className='star' icon={['far', 'star']} />
                <FontAwesomeIcon className='star' icon={['far', 'star']} />
                <FontAwesomeIcon className='star' icon={['far', 'star']} />
              </div>
            </li>
            <li>
              <div>
                <FontAwesomeIcon icon='angle-down' />
                Taro Pearl Milk Tea
              </div>
            </li>
            <li>
              <div>
                <FontAwesomeIcon icon='angle-down' />
                Matcha Red Bean Milk Tea
              </div>
            </li>
            <li>
              <div>
                <FontAwesomeIcon icon='angle-down' />
                QQ Happy Family Milk Tea
              </div>
            </li>
            <li>
              <div>
                <FontAwesomeIcon icon='angle-down' />
                Peach Kiwi Tea with Aiyu Jelly
              </div>
            </li>
            <li>Mango Green Tea</li>
            <li>Wintermelon Lemonade</li>
            <li>Kiwi Fruit Tea with Aiyu Jelly</li>
            <li>Lime Mojito</li>
            <li>Thai Tea Ice Blended with Pearl</li>
          </ul>
        </section>
        <Comments />
      </>
    )
  }
}

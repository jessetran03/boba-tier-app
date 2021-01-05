import React, { Component } from 'react'
import './Rankings.css'
import { Link } from 'react-router-dom'
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
      <h2>Houston, TX</h2>
      <section className="rankings">
        <section className="boba-shop-ranking">
          <h3>Top 5 Rated Boba Shops</h3>
          <ol>
            {shops
              .sort((a,b) => a.average_rating < b.average_rating ? 1 : -1)
              .slice(0, 7)
              .map(shop =>
                <li key={shop.id}>
                  <Link to='/shop/'>
                    {shop.store_name}
                  </Link>
                </li>
              )}
          </ol>
        </section>
        <section className="boba-tea-ranking">
          <h3>Top 5 Rated Boba Drinks</h3>
          <ol>
            <li>
              <h4>Brown Sugar Boba Milk with Cream mousse</h4>
              <p><i>Tiger Sugar</i></p>
            </li>
            <li>
              <h4>Japanese Matcha Soy Tea</h4>
              <p><i>7 Leaves Cafe</i></p>
            </li>
            <li>
              <h4>Okinawa Milk Tea</h4>
              <p><i>Sharetea</i></p>
            </li>
            <li>
              <h4>Brown Sugar Boba Milk with Cream mousse</h4>
              <p><i>Tiger Sugar</i></p>
            </li>
            <li>
              <h4>Milk Tea with Boba</h4>
              <p><i>Gongcha</i></p>
            </li>
          </ol>
        </section>
        <section className="boba-shop-ranking">
          <h3>Most Popular Boba Shops</h3>
          <ol>
            <li>Gongcha</li>
            <li>Sharetea</li>
            <li>Tea Top</li>
            <li>Kung Fu Tea</li>
            <li>The Teahouse Tapioca & Tea</li>
          </ol>
        </section>
        <section className="boba-tea-ranking">
          <h3>Most Popular Boba Drinks</h3>
          <ol>
            <li>
              <h4>Brown Sugar Boba Milk with Cream mousse</h4>
              <p><i>Tiger Sugar</i></p>
            </li>
            <li>
              <h4>Japanese Matcha Soy Tea</h4>
              <p><i>7 Leaves Cafe</i></p>
            </li><li>
              <h4>Okinawa Milk Tea</h4>
              <p><i>Sharetea</i></p>
            </li><li>
              <h4>Brown Sugar Boba Milk with Cream mousse</h4>
              <p><i>Tiger Sugar</i></p>
            </li>
            <li>
              <h4>Milk Tea with Boba</h4>
              <p><i>Gongcha</i></p>
            </li>
          </ol>
        </section>
      </section>
      </>
    )
  }
}

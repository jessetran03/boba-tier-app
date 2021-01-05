import React, { Component } from 'react'
// import './ShopList.css'
import Rating from '../../components/Rating/Rating'
import { Link } from 'react-router-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import STORE from '../../STORE'
// import config from '../config'
// import TokenService from '../services/token-service'

export default class ShopList extends Component {
  state = {
    shops: STORE.shops,
  }

  render() {
    const shops = this.state.shops
    return (
      <>
      <h2>Shop List</h2>
      <section className="my-lists">
      <section className="boba-shop-ranking">
            <h3>Top 5 Rated Boba Shops</h3>
            <ol>
              {shops
                .sort((a, b) => a.id < b.id ? 1 : -1)
                .map(shop =>
                  <li key={shop.id}>
                    <Link to='/shop/sharetea-houston'>
                      {shop.store_name}
                    </Link>
                  </li>
                )}
            </ol>
          </section>
        
      </section>
      </>
    )
  }
}
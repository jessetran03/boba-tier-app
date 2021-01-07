import React, { Component } from 'react'
// import './ShopList.css'
// import Rating from '../../components/Rating/Rating'
import { Link } from 'react-router-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import config from '../../config'
// import TokenService from '../services/token-service'

export default class ShopList extends Component {
  state = {
    shops: [],
  }

  componentDidMount() {
    this.getShops()
  }

  getShops = () => {
    return fetch(`${config.API_ENDPOINT}/shops`, {
      method: 'GET',
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
      .then((shops) => {
        this.setState({ shops })
      })
      .catch(error => {
        console.error({ error })
      })
  }

  render() {
    const shops = this.state.shops
    return (
      <>
      <h2>List of Boba Tea Spots</h2>
      <section className="my-lists">
      <section className="boba-shop-ranking">
            <h3>Houston, TX</h3>
            <ol>
              {shops
                .sort((a, b) => a.id > b.id ? 1 : -1)
                .map(shop =>
                  <li key={shop.id}>
                    <Link to={`/shops/${shop.id}`}>
                      {shop.shop_name}
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
import React, { Component } from 'react'
import './ShopList.css'
// import Rating from '../../components/Rating/Rating'
import { Link } from 'react-router-dom'
import config from '../../config'

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
        <section className="shop-list">
          <h3>Houston, TX</h3>
          <ul>
            {shops
              .sort((a, b) => a.id > b.id ? 1 : -1)
              .map(shop =>
                <li key={shop.id}>
                    <Link to={`/shops/${shop.id}`}>
                      <div className='list-shop'>
                        <h3>{shop.shop_name}</h3>
                      </div>
                    </Link>
                </li>
              )}
          </ul>
        </section>
      </>
    )
  }
}
import React, { Component } from 'react'
import './ShopList.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import config from '../../config'

export default class ShopList extends Component {
  state = {
    shops: [],
    loading: false,
  }

  componentDidMount() {
    this.getShops()
  }

  getShops = () => {
    this.setState({ loading: true })
    fetch(`${config.API_ENDPOINT}/shops`, {
      method: 'GET',
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
      .then((shops) => {
        this.setState({ 
          shops,
          loading: false
        })
      })
      .catch(error => {
        console.error({ error })
        this.setState({ loading: false })
      })
  }

  render() {
    const { shops, loading } = this.state
    return (
      <section className='shop-list-page'>
        <h2>List of Boba Tea Shops</h2>
        <section className='shop-list'>
          <h3>Houston, TX</h3>
          <ul>
            {shops
              .sort((a, b) => a.id > b.id ? 1 : -1)
              .map(shop =>
                <Link to={`/shops/${shop.id}`} key={shop.id}>
                  <li key={shop.id}>
                    <h4>{shop.shop_name}</h4>
                  </li>
                </Link>
              )}
          </ul>
        </section>
        <div>
          {loading && <FontAwesomeIcon className='spinner' icon='spinner' spin />}
        </div>
      </section>
    )
  }
}
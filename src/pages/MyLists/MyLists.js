import React, { Component } from 'react'
import './MyLists.css'
import Rating from '../../components/Rating/Rating'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import config from '../../config'
import TokenService from '../../services/token-service'

export default class Rankings extends Component {
  state = {
    drinks: [],
    shops: [],
    shopId: 'all',
  }

  componentDidMount() {
    this.getShops()
    this.getUserDrinks()
  }

  onChange = e => {
    this.setState({ shopId: e.target.value })
  }

  handleFilter = e => {
    e.preventDefault();
    this.getUserDrinks();
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

  getUserDrinks = () => {
    const shopId = this.state.shopId
    return fetch(`${config.API_ENDPOINT}/drinks/ratings/${shopId}`, {
      method: 'GET',
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`
      }
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
      .then((drinks) => {
        this.setState({ drinks })
      })
      .catch(error => {
        console.error({ error })
      })
  }

  render() {
    const shops = this.state.shops
    const drinks = this.state.drinks
    return (
      <>
        <h2>My Lists</h2>
        <form onSubmit={this.handleFilter}>
          <h4>Filter by store:</h4>
          <select onChange={this.onChange}>
            <option>All</option>
            {shops.map(shop =>
              <option value={shop.id}>{shop.shop_name}</option>
            )}
          </select>
          <button type='submit'>Apply Filter</button>
        </form>
        <section className="my-lists">
          <section className="my-favorites">
            <h3>My Rated Drinks</h3>
            <ul>
              {drinks.length === 0 &&
                <p>You have not rated any drinks for this shop</p>
              }
              {drinks.map(drink =>
                <li>
                  <h4>{drink.drink_name}</h4>
                  <Rating rating={drink.rating} />
                  <p><i>{drink.shop_name}</i></p>
                </li>
              )}
            </ul>
          </section>

        </section>
      </>
    )
  }
}
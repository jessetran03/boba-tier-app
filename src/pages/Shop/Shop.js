import React, { Component } from 'react'
import Comments from '../../components/Comments/Comments'
import ListDrink from '../../components/ListDrink/ListDrink'
import Rating from '../../components/Rating/Rating'
import './Shop.css'
import config from '../../config'
import TokenService from '../../services/token-service'
import STORE from '../../STORE'

export default class Shop extends Component {
  state = {
    listDrinks: STORE.drinks,
    rankedDrinks: [],
    drinks: [],
    shop: {},
  }

  componentDidMount() {
    this.getShop()
    this.getRankedDrinks()
    this.getDrinks()
  }

  getShop = () => {
    const { shopId } = this.props.match.params
    return fetch(`${config.API_ENDPOINT}/shops/${shopId}`, {
      method: 'GET',
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
      .then((shop) => {
        this.setState({ shop })
      })
      .catch(error => {
        console.error({ error })
      })
  }

  getRankedDrinks = () => {
    const { shopId } = this.props.match.params
    return fetch(`${config.API_ENDPOINT}/ratings/shops/${shopId}`, {
      method: 'GET',
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
      .then((rankedDrinks) => {
        this.setState({ rankedDrinks })
      })
      .catch(error => {
        console.error({ error })
      })
  }

  getDrinks = () => {
    const { shopId } = this.props.match.params
    //return fetch(`${config.API_ENDPOINT}/drinks/shop/${shopId}`, {
    return fetch(`${config.API_ENDPOINT}/drinks/rating/${shopId}`, {
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

  handleAddDrink = e => {
    e.preventDefault()
    const { shopId } = this.props.match.params
    const newDrink = {
      drink_name: e.target['drink-name'].value,
      shop_id: shopId,
    }
    fetch(`${config.API_ENDPOINT}/drinks`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify(newDrink),
    })
      .then(res => {
        if (!res.ok)
          return res.json().then(e => Promise.reject(e))
        return res.json()
      })
      .then(drink => {
        this.getDrinks()
        e.target['drink-name'].value = ''
      })
      .catch(error => {
        console.error({ error })
      })
  }

  render() {
    const rankedDrinks = this.state.rankedDrinks
    const drinks = this.state.drinks
    const shop = this.state.shop
    return (
      <>
        <h2>{shop.shop_name}</h2>
        <h4><i>{shop.city}</i></h4>

        <section className="shop-tea-ranking">
          <h3>Top 5 Drinks</h3>
          <ol>
            {rankedDrinks
              .slice(0, 5)
              .map(drink =>
                <li key={drink.id}>
                  {drink.drink_name}
                  <br /><br />
                  <Rating rating={Math.round(drink.average_rating)} />
                  <br />
                  ({drink.rating_count} Ratings)
                  <br />
                  Rating: {parseFloat(drink.average_rating).toFixed(2)}
                </li>
              )
            }
          </ol>
        </section>

        <section className="shop-tea-list">
          <h3>List of drinks:</h3>
          <h4>Leave your rating!</h4>
          <ul>
            {drinks
              .sort((a,b) => a.id > b.id ? 1 : -1)
              .map(drink =>
                <li key={drink.id}>
                  <ListDrink
                    id={drink.id}
                    drink={drink.drink_name}
                    ratingId={drink.rating_id}
                    rating={drink.rating}
                    onGetDrinks={this.getDrinks}
                  />
                </li>
            )}
          </ul>
          <h5><i>Don't see a drink? Add it below!</i></h5>
          <form onSubmit={this.handleAddDrink}>
            <input 
              type='text'
              id='drink-name-input'
              name='drink-name'
              required 
            />
            <button type='submit'>
              Add Drink!
            </button>
          </form>
        </section>

        <Comments />
      </>
    )
  }
}
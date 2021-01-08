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
    rankedDrinks: STORE.rankedDrinks,
    drinks: [],
    shop: STORE.shop,
    comments: [],
  }
  static defaultProps = {
    match: { params: {} },
  }

  componentDidMount() {
    this.getShop()
    this.getRankedDrinks()
    TokenService.hasAuthToken()
      ? this.getUserDrinks()
      : this.getDrinks()
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

  getUserDrinks = () => {
    const { shopId } = this.props.match.params
    return fetch(`${config.API_ENDPOINT}/drinks/shops/${shopId}`, {
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

  getDrinks = () => {
    return fetch(`${config.API_ENDPOINT}/drinks`, {
      method: 'GET',
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
    const shopId = parseInt(this.props.match.params.shopId)
    return (
      <>
        <h2>{shop.shop_name}</h2>
        <h4><i>{shop.city}</i></h4>

        <section className="shop-tea-ranking">
          <h3>Top 5 Drinks</h3>
          {rankedDrinks.length === 0 &&
            <p><i>Looks like there are no ratings for this store yet. Leave some ratings!</i></p>
          }
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
          {TokenService.hasAuthToken() 
            ? <h4>Leave your rating!</h4>
            : <p>Please log in to leave a rating</p>}
          {drinks.length === 0 &&
            <p><i>Looks like no drinks have been added to this store yet. Add some drinks below!</i></p>
          }
          <ul>
            {drinks
              .filter(drink => drink.shop_id === shopId)
              .sort((a, b) => a.id > b.id ? 1 : -1)
              .map(drink =>
                <li key={drink.id}>
                  <ListDrink
                    id={drink.id}
                    drink={drink.drink_name}
                    ratingId={drink.rating_id}
                    rating={drink.rating}
                    onGetUserDrinks={this.getUserDrinks}
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

        <Comments shopId={shopId} />
      </>
    )
  }
}
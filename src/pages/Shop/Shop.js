import React, { Component } from 'react'
import Comments from '../../components/Comments/Comments'
import ListDrink from '../../components/ListDrink/ListDrink'
import './Shop.css'
// import config from '../config'
// import TokenService from '../services/token-service'
import STORE from '../../STORE'

export default class Shop extends Component {
  state = {
    listDrinks: STORE.drinks,
  }

  handleAddDrink = e => {
    e.preventDefault()
    console.log('Successfully added drink!')
  }

  render() {
    const listDrinks = this.state.listDrinks
    const drinks = listDrinks.filter(drink => drink.store_id === 2)
    return (
      <>
        <h2>Sharetea</h2>

        <section className="shop-tea-ranking">
          <h3>Top 5 Drinks</h3>
          <ol>
            {drinks
              .sort((a,b) => a.average_rating < b.average_rating ? 1 : -1)
              .slice(0, 5)
              .map(drink =>
                <li key={drink.id}>
                  {drink.drink_name}
                </li>
              )
            }
          </ol>
        </section>

        <section className="shop-tea-list">
          <h3>List of drinks:</h3>
          <h4>Leave your rating!</h4>
          <p><i>Click the heart to add to your favorties</i></p>
          <ul>
            {drinks
              .sort((a,b) => a.id > b.id ? 1 : -1)
              .map(drink =>
                <li key={drink.id}>
                  <ListDrink
                    id={drink.id}
                    drink={drink.drink_name}
                  />
                </li>
            )}
          </ul>
          <h5><i>Don't see a drink? Add it below!</i></h5>
          <form onSubmit={this.handleAddDrink}>
            <input required />
            <button type='submit'>Add Drink!</button>
          </form>
        </section>

        <Comments />
      </>
    )
  }
}

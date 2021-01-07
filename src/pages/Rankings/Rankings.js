import React, { Component } from 'react'
import './Rankings.css'
// import { Link } from 'react-router-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Rating from '../../components/Rating/Rating'
// import STORE from '../../STORE'
import config from '../../config'
// import TokenService from '../services/token-service'

export default class Rankings extends Component {
  state = {
    // shops: STORE.shops,
    drinks: [],
  }

  componentDidMount() {
    this.getRankings()
  }

  getRankings = () => {
    return fetch(`${config.API_ENDPOINT}/ratings`, {
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

  render() {
    // const shops = this.state.shops
    const drinks = this.state.drinks
    return (
      <>
        <h2>Houston, TX</h2>
        <section className="rankings">
          
          <section className="boba-tea-ranking">
            <h3>Top 10 Rated Boba Drinks</h3>
            <ol>
              {drinks
              .slice(0, 10)
              .map(drink =>
                <li key={drink.id}>
                  <h4>{drink.drink_name}</h4>
                  <p><i>{drink.shop_name}</i></p>
                  <Rating rating={Math.round(drink.average_rating)} />
                  <br />
                  ({drink.rating_count} Ratings)
                  <br />
                  <p>Rating: {parseFloat(drink.average_rating).toFixed(2)}</p>
                </li>
              )}
            </ol>
          </section>
          
        </section>
      </>
    )
  }
}

/*
<section className="boba-shop-ranking">
            <h3>Top 5 Rated Boba Shops</h3>
            <ol>
              {shops
                .sort((a, b) => a.average_rating < b.average_rating ? 1 : -1)
                .slice(0, 7)
                .map(shop =>
                  <li key={shop.id}>
                    <Link to={`/shop/${shop.id}`}>
                      {shop.store_name}
                    </Link>
                    <br />
                    <br />
                    <Rating rating='4' />
                  </li>
                )}
            </ol>
          </section>*/
          
          /*<section className="boba-shop-ranking">
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
            <h3>Most Favorited Boba Drinks</h3>
            <ol>
              <li>
                <h4>Brown Sugar Boba Milk with Cream mousse</h4>
                <p><i>Tiger Sugar</i></p>
                237 &nbsp;
                <FontAwesomeIcon className='heart' icon='heart' /> 
              </li>
              <li>
                <h4>Japanese Matcha Soy Tea</h4>
                <p><i>7 Leaves Cafe</i></p>
                189 &nbsp;
                <FontAwesomeIcon className='heart' icon='heart' /> 
              </li><li>
                <h4>Okinawa Milk Tea</h4>
                <p><i>Sharetea</i></p>
                156 &nbsp;
                <FontAwesomeIcon className='heart' icon='heart' /> 
              </li><li>
                <h4>Brown Sugar Boba Milk with Cream mousse</h4>
                <p><i>Tiger Sugar</i></p>
                135 &nbsp;
                <FontAwesomeIcon className='heart' icon='heart' /> 
              </li>
              <li>
                <h4>Milk Tea with Boba</h4>
                <p><i>Gongcha</i></p>
                123 &nbsp;
                <FontAwesomeIcon className='heart' icon='heart' /> 
              </li>
            </ol>
          </section>*/
import React, { Component } from 'react'
import './Rankings.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Rating from '../../components/Rating/Rating'
import config from '../../config'

export default class Rankings extends Component {
  state = {
    drinks: [],
    loading: false,
  }

  componentDidMount() {
    this.getRankings()
  }

  getRankings = () => {
    this.setState({ loading: true })
    return fetch(`${config.API_ENDPOINT}/ratings`, {
      method: 'GET',
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
      .then((drinks) => {
        this.setState({
          drinks,
          loading: false,
        })
      })
      .catch(error => {
        console.error({ error })
        this.setState({ loading: false })
      })
  }

  render() {
    const { drinks, loading } = this.state
    return (
      <section className='rankings-page'>
        <h2>Top 10 Rated Drinks</h2>
        <section className='boba-tea-ranking'>
          <h3>Houston, TX</h3>
          <ol>
            {drinks
              .slice(0, 10)
              .map((drink, index) =>
                <li key={drink.id}>
                  <section className='rank-item-number'>
                    {index + 1}
                  </section>
                  <section className='rank-item-info'>
                    <h4>{drink.drink_name}</h4>
                    <p className='rank-item-shop'>
                      {drink.shop_name}
                    </p>
                    <div>
                      <p className='rank-item-rating'><Rating rating={Math.round(drink.average_rating)} /></p>
                      <p className='rank-item-rating-count'>({drink.rating_count} Ratings)</p>
                    </div>
                    <p>
                      Average Rating: {parseFloat(drink.average_rating).toFixed(2)}
                    </p>
                  </section>
                </li>
              )}
          </ol>
        </section>
        <div className='loading'>
          {loading && <FontAwesomeIcon className='spinner' icon='spinner' spin />}
        </div>
      </section>
    )
  }
}
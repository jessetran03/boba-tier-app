import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Landing from '../pages/Landing/Landing'
import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'
import MyLists from '../pages/MyLists/MyLists'
import Rankings from '../pages/Rankings/Rankings'
import ShopList from '../pages/ShopList/ShopList'
import Shop from '../pages/Shop/Shop'
import Nav from '../components/Nav/Nav'
import './App.css'

class App extends Component {
  renderMainRoutes() {
    return (
      <>
        <Route
          exact
          path='/'
          component={Landing}
        />
        <Route
          exact
          path='/login'
          component={Login}
        />
        <Route
          exact
          path='/register'
          component={Register}
        />
        <Route
          exact
          path='/lists'
          component={MyLists}
        />
        <Route
          path='/rankings'
          component={Rankings}
        />
        <Route
          exact
          path='/shops'
          component={ShopList}
        />
        {['/shops/:shopId'].map(path =>
          <Route
            exact
            key={path}
            path={path}
            component={Shop}
          />
        )}
      </>
    )
  }

  render() {
    return (
      <>
        <Route
          path='/'
          component={Nav}
        />
        <main>
          {this.renderMainRoutes()}
        </main>
      </>
    )
  }
}

export default App;
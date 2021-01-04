import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Landing from '../pages/Landing/Landing'
import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'
import Rankings from '../pages/Rankings/Rankings'
import Shop from '../pages/Shop/Shop'
import Nav from '../components/Nav/Nav'
import './App.css'

/*{
  ['/workouts/:workoutId'].map(path =>
    <Route
      exact
      key={path}
      path={path}
      component={WorkoutExerciseList}
    />
  )
}*/

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
          path='/rankings'
          component={Rankings}
        />
        {['/shop/:shopId'].map(path =>
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
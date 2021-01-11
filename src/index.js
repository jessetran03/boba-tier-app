import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar, faCheck, faAngleDown, faAngleUp, faSpinner, faBars, faUser } from '@fortawesome/free-solid-svg-icons'
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons'
import App from './App/App'
import './index.css'
// import reportWebVitals from './reportWebVitals';

library.add(
  faStar,
  farStar,
  faCheck,
  faAngleDown,
  faAngleUp,
  faSpinner,
  faBars,
  faUser,
)

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

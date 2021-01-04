import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar, faCheckSquare, faHeart, faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { faStar as farStar, faCheckSquare as farCheckSquare, faHeart as farHeart } from '@fortawesome/free-regular-svg-icons'
import App from './App/App'
import './index.css'
// import reportWebVitals from './reportWebVitals';

library.add(
  faStar, // solid star
  farStar, // regular star
  faCheckSquare,
  farCheckSquare,
  faHeart,
  farHeart,
  faAngleDown,
  faAngleUp,
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

import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import SeatBooking from './Components/SeatBooking'
import Invoice from './Components/Invoice'

class App extends Component {
  render () {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path='/'>
              <SeatBooking />
            </Route>
            <Route exact path='/invoice'>
              <Invoice />
            </Route>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App

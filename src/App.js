import React, { Component } from 'react'
import SeatBooking from './Components/SeatBooking'
import Invoice from './Components/Invoice'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      CurrentPage: 'BookSeats'
    }
  }

  UpdatePage = (page) => {
    this.setState({
      CurrentPage: page
    })
  }
  componentDidMount() {
  }

  render() {
    return (
      <div>
        {
          (this.state.CurrentPage === 'BookSeats' ? <SeatBooking UpdatePage={this.UpdatePage} /> : '')
        }
        {
          (this.state.CurrentPage === 'invoice' ? <Invoice UpdatePage={this.UpdatePage} /> : '')
        }
      </div>
    )
  }
}

export default App;

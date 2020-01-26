import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'

class Invoice extends Component {
  constructor (props) {
    super(props)
    this.state = {
      Seats: [],
      TotalSeats: '',
      TotalPrice: ''
    }
  }

  componentDidMount () {
    axios.get('http://localhost:8080/invoice').then(res => {
      this.setState({
        Seats: res.data.Seats,
        TotalSeats: res.data.totalSeats,
        TotalPrice: res.data.totalPrice
      })
    })
  }

  render () {
    return (
      <div>
        <div>
          <h1>Movie Seat Selection</h1>
          <div className='container'>

            <div className='w3ls-reg' style={{ display: 'unset', flexWrap: 'unset', paddingTop: '0px' }}>

              <div className='displayerBoxes txt-center' style={{ overflowX: 'auto' }}>
                <table className='Displaytable w3ls-table' width='100%'>
                  <tbody>
                    <tr>
                      <th>Seats</th>
                      <th>Total Seats</th>
                      <th>Total Price</th>
                    </tr>
                    <tr>
                      <td>
                        <h6>{
                          this.state.Seats.map(data => (
                            <span key={data}>{data}, </span>
                          ))
                        }
                        </h6>
                      </td>
                      <td>
                        <h6>{this.state.TotalSeats}</h6>
                      </td>
                      <td>
                        <h6>£{parseFloat(this.state.TotalPrice).toFixed(2)}</h6>
                        <textarea style={{ visibility: 'hidden', height: '1px' }} />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div>
                <br />
                <button onClick={() => { this.props.history.push('/') }}>Book More Seats</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Invoice)

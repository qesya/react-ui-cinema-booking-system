import React, { Component } from 'react'
import axios from 'axios'
import $ from 'jquery'

class SeatBooking extends Component {
    componentDidMount() {
        axios.get('http://localhost:8080/seatData').then(res => {
           // console.log(res.data)
            const ResData = res.data
            for(let i=0;i<ResData.length;i++){
                if(ResData[i].available === false){
                    $(`input[value=${ResData[i].seatNumber}]`).attr("disabled", true)
                }
            }
        })
    }
    SelectSeats = () => {
        const Selected = []
        $('#seatsBlock :checked').each(function () {
            Selected.push($(this).val());
        })

        // console.log(Selected)
        if(Selected.length !== 0)
        {
            axios.post('http://localhost:8080/bookSeat', {"seats": Selected}).then(res => {
           // console.log(res.data)
            this.props.UpdatePage('invoice')
            })
        }
        else {
            alert('Please Select Seats')
        }
    }

    render() {
        const seatsColumns = ['1', '2', '3', '4', '5', '', '6', '7', '8', '9', '10', '11', '12'] 
        const seatsRows = ['A', 'B','C', 'D', 'E', '', 'F', 'G', 'H', 'I', 'J']
        const seatsGenerator = () => {
            return (
                <table id="seatsBlock">
                    <tbody>
                        <tr>
                            <td></td>
                            {seatsColumns.map(column => <td>{column}</td>)}
                        </tr>
                            {
                                seatsRows.map(row => 
                                    row === ''
                                    ?
                                    <tr className="seatVGap"></tr>
                                    :
                                    <tr>
                                        <td>
                                            {row}
                                        </td>
                                        {seatsColumns.map(column => { 
                                            return (
                                                column === ''
                                                ?
                                                <td className="seatGap"></td>                                               
                                                :
                                                <td>
                                                    <input type="checkbox" className="seats" value={`${row}${column}`} />
                                                </td>
                                            )
                                         })}
                                         </tr>)
                            }
                    </tbody>
                </table>
            );
        }
        return (
            <div>
                <div>
                    <h1>Movie Seat Selection</h1>
                    <div className="container">

                        <div className="w3ls-reg" style={{paddingTop: '0px'}}>

                            <ul className="seat_w3ls">
                                <li className="smallBox greenBox">Selected Seat</li>

                                <li className="smallBox redBox">Reserved Seat</li>

                                <li className="smallBox emptyBox">Empty Seat</li>
                            </ul>
                            <div className="seatStructure txt-center" style={{overflowX:'auto'}}>
                                {seatsGenerator()}
                                <div className="screen">
                                    <h2 className="wthree">Screen this way</h2>
                                </div>
                                <button onClick={() => { this.SelectSeats()}}>Confirm Selection</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SeatBooking;

import React, { Component } from 'react'
import car_image from '../images/car_image2.png'
import KeyboardEventHandler from 'react-keyboard-event-handler';
import socket from './Socket'
export default class Car_2 extends Component {

    handleKeyUp = (event) => {
        this.props.move_up(this.props.number)
        socket.emit('move_car_2', this.props.number, 1)
        socket.emit('winner', this.props.laps_c1, this.props.laps_c2)
    }

    handleKeyDown = (event) => {
        this.props.move_down(this.props.number)
        socket.emit('move_car_2', this.props.number, 2)
        socket.emit('winner', this.props.laps_c1, this.props.laps_c2)
    }

    handleKeyRight = (event) => {
        this.props.move_right(this.props.number) 
        socket.emit('move_car_2', this.props.number, 3)
        socket.emit('winner', this.props.laps_c1, this.props.laps_c2)
    }

    handleKeyLeft = (event) => {
        this.props.move_left(this.props.number)
        socket.emit('move_car_2', this.props.number, 4)
        socket.emit('winner', this.props.laps_c1, this.props.laps_c2) 
    }

    render() {
        return (
            <div>
                <img src={car_image} alt="car view" />
                <KeyboardEventHandler
                    handleKeys={['8']}
                    onKeyEvent={this.handleKeyUp} />
                <KeyboardEventHandler
                    handleKeys={['5']}
                    onKeyEvent={this.handleKeyDown} />
                <KeyboardEventHandler
                    handleKeys={['6']}
                    onKeyEvent={this.handleKeyRight} />
                <KeyboardEventHandler
                    handleKeys={['4']}
                    onKeyEvent={this.handleKeyLeft} />
            </div>

        )
    }
}


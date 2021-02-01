import React, { Component } from 'react'
import car_image from '../images/car_image.svg'
import KeyboardEventHandler from 'react-keyboard-event-handler';
import socket from './Socket'



export default class Car_1 extends Component {

    handleKeyUp = (event) => {
        this.props.move_up(this.props.number)
        socket.emit('move_car_1', this.props.number, 1)
        socket.emit('winner', this.props.laps_c1, this.props.laps_c2)
    }

    handleKeyDown = (event) => {
        this.props.move_down(this.props.number)
        socket.emit('move_car_1', this.props.number, 2)
        socket.emit('winner', this.props.laps_c1, this.props.laps_c2)
    }

    handleKeyRight = (event) => {
        this.props.move_right(this.props.number)
        socket.emit('move_car_1', this.props.number, 3)
        socket.emit('winner', this.props.laps_c1, this.props.laps_c2)
    }

    handleKeyLeft = (event) => {
        this.props.move_left(this.props.number)
        socket.emit('move_car_1', this.props.number, 4)
        socket.emit('winner', this.props.laps_c1, this.props.laps_c2)
    }

    render() {
        return (
            <div>
                <img src={car_image} alt="car view" />
                <KeyboardEventHandler
                    handleKeys={['w']}
                    onKeyEvent={this.handleKeyUp} />

                <KeyboardEventHandler
                    handleKeys={['s']}
                    onKeyEvent={this.handleKeyDown} />
                <KeyboardEventHandler
                    handleKeys={['d']}
                    onKeyEvent={this.handleKeyRight} />
                <KeyboardEventHandler
                    handleKeys={['a']}
                    onKeyEvent={this.handleKeyLeft} />
            </div>

        )
    }
}


import React, { Component } from 'react'
import car_image from '../images/car_image.svg'
import KeyboardEventHandler from 'react-keyboard-event-handler';
import socket from './Socket'
export default class Car_2 extends Component {

    handleKeyUp = (event) => {
        this.props.move_up(this.props.number)
        socket.emit ('move_up_car_2',this.props.number)
    }

    handleKeyDown = (event) => {
        this.props.move_down(this.props.number)
        socket.emit ('move_down_car_2',this.props.number)
    }

    handleKeyRight = (event) => {
        this.props.move_right(this.props.number)
        socket.emit ('move_right_car_2',this.props.number)
    }

    handleKeyLeft = (event) => {
        this.props.move_left(this.props.number)
        socket.emit ('move_left_car_2',this.props.number)
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


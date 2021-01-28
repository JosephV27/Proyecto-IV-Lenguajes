import React, { Component } from 'react'
import car_image from '../images/car_image.svg'
import KeyboardEventHandler from 'react-keyboard-event-handler';

export default class Car_2 extends Component {

    handleKeyUp = (event) => {
        this.props.move_up(this.props.number)
    }

    handleKeyDown = (event) => {
        this.props.move_down(this.props.number)
    }

    handleKeyRight = (event) => {
        this.props.move_right(this.props.number)
    }

    handleKeyLeft = (event) => {
        this.props.move_left(this.props.number)
    }

    render() {
        return (
            <div>
                <img src={car_image} alt="car view" />
                <KeyboardEventHandler
                    handleKeys={['up']}
                    onKeyEvent={this.handleKeyUp} />
                 <KeyboardEventHandler
                    handleKeys={['down']}
                    onKeyEvent={this.handleKeyDown} />
                <KeyboardEventHandler
                    handleKeys={['right']}
                    onKeyEvent={this.handleKeyRight} />
                <KeyboardEventHandler
                    handleKeys={['left']}
                    onKeyEvent={this.handleKeyLeft} />
            </div>

        )
    }
}


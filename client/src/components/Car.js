import React, { Component } from 'react'
import car_image from '../images/car_image.svg'
import KeyboardEventHandler from 'react-keyboard-event-handler';

export default class Car extends Component {

    handleClick = (event) => {
        // if (event.charCode === 'w') {
        this.props.move(this.props.number)
        //     console.log("Sirvio")
        // }
    }

    render() {
        return (
            <div>
                <img onClick={this.handleClick} src={car_image} alt="car view" />
                <KeyboardEventHandler
                    handleKeys={['w']}
                    onKeyEvent={this.handleClick} />
            </div>

        )
    }
}
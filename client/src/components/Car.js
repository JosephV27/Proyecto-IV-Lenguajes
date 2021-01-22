import React, {Component} from 'react'

export default class Obstacle extends Component{

    handleClick = () => {
        this.props.move(this.props.number)
    }

    render(){
        return(
            <div onClick={this.handleClick} className={"car"}>
                O
            </div>
        )
    }
}
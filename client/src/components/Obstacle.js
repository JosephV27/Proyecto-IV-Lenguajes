import React, {Component} from 'react'
import barrier from '../images/barrier.svg'

export default class Obstacle extends Component{

    render(){
        return(
            <img className={"obstacle"} src={barrier} alt="barrier for cars"/>
        )
    }
}
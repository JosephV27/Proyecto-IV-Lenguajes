import React from 'react';
import './styles/Game.css';
import Grid from 'react-css-grid'
import Tile from './Tile'
import Finish from './Finish'
import Obstacle from './Obstacle';
import Car_1 from './Car_1';
import Car_2 from './Car_2';

class Game extends React.Component {

    state = {
        finishTiles: [23, 40, 57, 74, 91],
        obstacles: [6, 108, 125, 142, 159, 176, 193, 210, 227, 244, 261, 278, 295, 312, 329, 346, 363, 380, 397, 414, 431, 448, 465, 482, 499, 516, 601, 600, 
            599, 598, 490, 602, 603, 604, 588, 572, 506, 556, 540, 523, 489, 472, 455, 438, 421, 404, 387, 370, 353, 336, 319, 302, 285,
            268, 251, 234, 217, 200, 183, 166, 149, 132, 115, 98, 7, 8, 26, 44, 62, 80, 5, 4, 82, 66, 50, 34, 18, 2, 3, 99, 116, 133, 150, 167, 184, 201, 218, 235,
            252, 269, 286, 303, 320, 337, 354, 371, 388, 405, 422, 439, 456, 473, 507, 524, 542, 560, 578, 596, 597, 515, 498, 481, 464, 447, 430, 413, 396, 379, 362,
            345, 328, 311, 294, 277, 260, 243, 226, 209, 192, 175, 158, 141, 124, 107],
        car_1: [87],
        car_2: [85],
        laps_1: 3,
        laps_2: 3
    }

    createBoard = () => {
        let tileArray = []
        for (let counter = 625; counter > 0; counter--) {
            tileArray.push(counter);
        }
        return this.occupyTiles(tileArray);
    }

    occupyTiles = (tileArray) => {
        return tileArray.map(number => (
            this.state.finishTiles.includes(number)
                ? <Finish number={number} />
                : this.state.obstacles.includes(number)
                    ? <Obstacle number={number} />
                    : this.state.car_1.includes(number)
                        ? <Car_1 move_up={this.move_up_1} move_down={this.move_down_1} move_right={this.move_right_1} move_left={this.move_left_1} number={number} />
                        : this.state.car_2.includes(number)
                            ? <Car_2 move_up={this.move_up_2} move_down={this.move_down_2} move_right={this.move_right_2} move_left={this.move_left_2} number={number} />
                            : <Tile number={number} />
        ))
    }

    move_up_1 = (number) => {
        this.setState(function () {
            if (this.state.obstacles.includes(number + 17)) {
                //pass
            }
            else if (this.state.finishTiles.includes(number + 17) && this.state.laps_1 > 1) {
                return {
                    car_1: [number + 28],
                    laps_1: this.state.laps_1 - 1
                }
            }
            else if (this.state.finishTiles.includes(number + 17) && this.state.laps_1 === 1){
                alert("ganó el carro 1");

            }
            else {
                return {
                    car_1: [number + 17]
                }
            }
        })
    }

    move_down_1 = (number) => {
        this.setState(function () {
            if (this.state.obstacles.includes(number - 17)) {
                //pass
            }
            else if (this.state.finishTiles.includes(number - 17) && this.state.laps_1 > 1) {
                return {
                    car_1: [number - 28],
                    laps_1: this.state.laps_1 - 1
                }
            }
            else if (this.state.finishTiles.includes(number - 17) && this.state.laps_1 === 1){
                alert("ganó el carro 1");
            }
            else {
                return {
                    car_1: [number - 17]
                }
            }
        })
    }

    move_right_1 = (number) => {
        this.setState(function () {
            if (this.state.obstacles.includes(number - 1)) {
                //pass
            }
            else if (this.state.finishTiles.includes(number - 1) && this.state.laps_1 > 1) {
                return {
                    car_1: [number - 2],
                    laps_1: this.state.laps_1 - 1
                }
            }
            else if (this.state.finishTiles.includes(number - 1) && this.state.laps_1 === 1){
                alert("ganó el carro 1");
            }
            else {
                return {
                    car_1: [number - 1]
                }
            }
        })
    }

    move_left_1 = (number) => {
        this.setState(function () {
            if (this.state.obstacles.includes(number + 1)) {
                //pass 
            }
            else if (this.state.finishTiles.includes(number + 1) && this.state.laps_1 > 1) {
                return {
                    car_1: [number + 2],
                    laps_1: this.state.laps_1 - 1
                }
            }
            else if (this.state.finishTiles.includes(number + 1) && this.state.laps_1 === 1){
                alert("ganó el carro 1");
            }
            else {
                return {
                    car_1: [number + 1]
                }
            }
        })
    }

    move_up_2 = (number) => {
        this.setState(function () {
            if (this.state.obstacles.includes(number + 17)) {
                //pass
            }
            else if (this.state.finishTiles.includes(number + 17) && this.state.laps_2 > 1) {
                return {
                    car_2: [number + 28],
                    laps_2: this.state.laps_2 - 1
                }
            }
            else if (this.state.finishTiles.includes(number + 17) && this.state.laps_2 === 1){
                alert("ganó el carro 2");

            }
            else {
                return {
                    car_2: [number + 17]
                }
            }
        })
    }

    move_down_2 = (number) => {
        this.setState(function () {
            if (this.state.obstacles.includes(number - 17)) {
                //pass
            }
            else if (this.state.finishTiles.includes(number - 17) && this.state.laps_2 > 1) {
                return {
                    car_2: [number - 28],
                    laps_2: this.state.laps_2 - 1
                }
            }
            else if (this.state.finishTiles.includes(number - 17) && this.state.laps_2 === 1){
                alert("ganó el carro 2");
            }
            else {
                return {
                    car_2: [number - 17]
                }
            }
        })
    }

    move_right_2 = (number) => {
        this.setState(function () {
            if (this.state.obstacles.includes(number - 1)) {
                //pass
            }
            else if (this.state.finishTiles.includes(number - 1) && this.state.laps_2 > 1) {
                return {
                    car_2: [number - 2],
                    laps_2: this.state.laps_2 - 1
                }
            }
            else if (this.state.finishTiles.includes(number - 1) && this.state.laps_2 === 1){
                alert("ganó el carro 2");
            }
            else {
                return {
                    car_2: [number - 1]
                }
            }
        })
    }

    move_left_2 = (number) => {
        this.setState(function () {
            if (this.state.obstacles.includes(number + 1)) {
                //pass 
            }
            else if (this.state.finishTiles.includes(number + 1) && this.state.laps_2 > 1) {
                return {
                    car_2: [number + 2],
                    laps_2: this.state.laps_2 - 1
                }
            }
            else if (this.state.finishTiles.includes(number + 1) && this.state.laps_2 === 1){
                alert("ganó el carro 2");
            }
            else {
                return {
                    car_2: [number + 1]
                }
            }
        })
    }

    render() {
        return (
            <div className="game-board">
                <Grid
                    width={50}
                    gap={0}
                >
                    {this.createBoard()}
                </Grid>
            </div>
        );
    }
}

export default Game;
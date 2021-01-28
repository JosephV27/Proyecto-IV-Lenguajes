import React from 'react';
import './styles/Game.css';
import Grid from 'react-css-grid'
import Tile from './Tile'
import Start from './Start'
import Obstacle from './Obstacle';
import Car_1 from './Car_1';
import Car_2 from './Car_2';

class Game extends React.Component {

    state = {
        startTiles: [12, 4],
        obstacles: [6, 23, 40, 57, 74, 91, 108, 125, 142, 159, 176, 193, 210, 227, 244, 261, 278, 295, 312, 329, 346, 363, 380, 397, 414, 431, 448, 465, 482, 499, 516, 533, 550, 567, 584, 601, 618],
        car_1: [29],
        car_2: [21],
        ahead_1: true,
        ahead_2: true
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
            this.state.startTiles.includes(number)
                ? <Start number={number} />
                : this.state.obstacles.includes(number)
                    ? <Obstacle number={number} />
                    : this.state.car_1.includes(number)
                        ? <Car_1 move_up={this.move_up_1} move_down={this.move_down_1} move_right={this.move_right_1} move_left={this.move_left_1} number={number} />
                        : this.state.car_2.includes(number)
                            ? <Car_2 move_up={this.move_up_2} move_down={this.move_down_2} move_right={this.move_right_2} move_left={this.move_left_2} number={number} />
                            : <Tile number={number}/>
        ))
    }

    move_up_1 = (number) => {
        this.setState( function () {
            if (this.state.obstacles.includes(number+17)) {
                alert("No puede moverse aqui");
            }
            else {
                return {
                    car_1: [number + 17]
                }
            }
        })
    }

    move_down_1 = (number) => {
        this.setState( function () {
            if (this.state.obstacles.includes(number-17)) {
                alert("No puede moverse aqui");
            }
            else {
                return {
                    car_1: [number - 17]
                }
            }
        })
    }

    move_right_1 = (number) => {
        this.setState( function () {
            if (this.state.obstacles.includes(number-1)) {
                alert("No puede moverse aqui");
            }
            else {
                return {
                    car_1: [number - 1]
                }
            }
        })
    }

    move_left_1 = (number) => {
        this.setState( function () {
            if (this.state.obstacles.includes(number+1)) {
                alert("No puede moverse aqui");
            }
            else {
                return {
                    car_1: [number + 1]
                }
            }
        })
    }

    move_up_2 = (number) => {
        this.setState( function () {
            if (this.state.obstacles.includes(number+17)) {
                alert("No puede moverse aqui");
            }
            else {
                return {
                    car_2: [number + 17]
                }
            }
        })
    }

    move_down_2 = (number) => {
        this.setState( function () {
            if (this.state.obstacles.includes(number-17)) {
                alert("No puede moverse aqui");
            }
            else {
                return {
                    car_2: [number - 17]
                }
            }
        })
    }

    move_right_2 = (number) => {
        this.setState( function () {
            if (this.state.obstacles.includes(number-1)) {
                alert("No puede moverse aqui");
            }
            else {
                return {
                    car_2: [number - 1]
                }
            }
        })
    }

    move_left_2 = (number) => {
        this.setState( function () {
            if (this.state.obstacles.includes(number+1)) {
                alert("No puede moverse aqui");
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
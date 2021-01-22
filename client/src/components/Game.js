import React from 'react';
import './styles/Game.css';
import Grid from 'react-css-grid'
import Tile from './Tile'
import Start from './Start'
import Obstacle from './Obstacle';
import Car from './Car';

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
                        ? <Car move={this.move_first_car} number={number} />
                        : this.state.car_2.includes(number)
                            ? <Car move={this.move_second_car} number={number} />
                            : <Tile />
        ))
    }

    move_down_first_car = (number) => {
        if (number === 11) {
            console.log("Ganaste");
        }
        else {
            this.setState({
                car_1: [number - 17]
            });
        }
    }

    move_down_second_car = (number) => {
        if (number === 3) {
            console.log("Ganaste");
        }
        else {
            this.setState({
                car_2: [number - 17]
            });
        }
    }

    move_first_car = (number) => {
        this.setState(function () {
            if (this.state.ahead_1 === false) {
                this.move_down_first_car(number)
            }
            else if (number === 624) {
                return {
                    car_1: [623],
                    ahead_1: false
                }
            }
            else {
                return {
                    car_1: [number + 17]
                }
            }
        }
        )
    }

    move_second_car = (number) => {
        this.setState(function () {
            if (this.state.ahead_2 === false) {
                this.move_down_second_car(number)
            }
            else if (number === 616) {
                return {
                    car_2: [615],
                    ahead_2: false
                }
            }
            else {
                return {
                    car_2: [number + 17]
                }
            }
        }
        )
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
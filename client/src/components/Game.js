import React from 'react';
import socket from './Socket'
import './styles/Game.css';
import Grid from 'react-css-grid'
import Tile from './Tile'
import Finish from './Finish'
import Obstacle from './Obstacle';
import Car_1 from './Car_1';
import Car_2 from './Car_2';


class Game extends React.Component {

    // state = {
    //     finishTiles: [], 
    //     obstacle: [], 
    //     car_1: [], 
    //     car_2: [], 
    //     laps_1: 0, 
    //     laps_2: 0
    // }

    /*
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
    */
    
    // state = {
    //     finishTiles: [101, 102, 103, 104, 105],
    //     obstacles: [107, 106, 99, 100, 123, 124, 157, 158, 140, 141, 175, 174, 192, 191, 209, 208, 226, 225, 242, 241, 258, 259, 275, 274, 291, 292, 309, 308, 116, 133, 150, 
    //         167, 184, 201, 218, 235, 117, 252, 269, 286, 303, 320, 337, 326, 325, 343, 342, 360, 359, 377, 376, 394, 393, 409, 426, 443, 460, 477, 494, 511, 529, 547, 371, 388, 
    //         405, 422, 439, 456, 473, 490, 507, 524, 354, 541, 559, 576, 577, 595, 613, 614, 615, 616, 617, 618, 619, 620, 604, 588, 572, 556, 540, 523, 506, 489, 472, 548, 549, 550, 
    //         534, 518, 501, 454, 436, 418, 417, 433, 500, 515, 516, 497, 479, 461, 444, 517, 533, 532, 531, 530, 514, 513, 512, 496, 495, 478, 410, 415, 398, 381, 365, 349, 333, 316, 299, 
    //         266, 249, 232, 283, 216, 200, 193, 177, 176, 161, 144, 128, 111, 93, 92, 91, 90, 89, 183, 166, 149, 132, 115, 98, 81, 63, 45, 28, 10, 27, 9, 8, 7, 6, 5, 4, 3, 2, 1, 17, 33, 49, 
    //         66, 83, 160, 159, 143, 142, 127, 126, 125, 110, 109, 108, 74, 566, 13,12,11,30,29,16,15,14,47,46,32,31,64,48,65,82,217,234,233,251,250,268,267,285,284,302,301,300,319,318,317,336,
    //         335,334,353,352,351,350,370,369,368,367,366,387,386,385,384,383,382,404,403,402,401,400,399,421,420,419,416,438,437,455,557,574,573,591,590,589,608,607,606,605,625,624,623,622,621,
    //         612,611,610,609,594,593,592,575,558],
    //     car_1: [121],
    //     car_2: [119],
    //     laps_1: 3,
    //     laps_2: 3
    // }

    // state = {
    //     finishTiles: [113,112,111,110,109],
    //     obstacles: [13,30,47,64,81,98,115,132,149,166,183,200,217,234,251,268,285,301,317,333,350,368,386,404,421,438,455,472,489,506,523,540,557,574,591,608,625,573,
    //         589,605,621,348,331,364,380,396,413,430,447,464,481,498,515,532,549,548,530,512,494,426,442,459,477,409,393,377,361,344,327,310,293,276,258,257,256,238,221
    //         ,204,187,170,154,137,120,104,87,71,55,56,73,90,107,124,141,158,175,192,209,226,243,260,277,313,295,63,45,27,9,8,7,6,5,4,3,2,1,114,108,17,33,49,65,82,99,116
    //         ,133,150,167,184,201,218,235,252,269,287,305,306,324,341,357,373,389,405,422,439,456,473,490,507,525,543,561,579,597,615,616,617,618,619,620,624,623,622,614
    //         ,613,612,611,610,609,607,606,596,595,594,593,592,590,578,577,576,575,560,559,558,542,541,524,388,387,372,371,370,369,356,355,354,353,352,351,379,378,363,362
    //         ,347,346,345,340,339,338,337,336,335,334,330,329,328,323,322,321,320,319,318,304,303,302,294,286,312,311,48,46,32,31,29,28,32,31,16,15,14,12,11,10,513,531,
    //         514,514,497,496,495,480,479,478,463,462,461,460,446,445,444,443,429,428,427,412,411,410,395,394,259,242,241,240,239,225,224,223,222,208,207,206,205,191,190,
    //         189,188,174,173,172,171,157,156,155,140,139,138,123,122,121,106,105,89,88,72,275],
    //     car_1: [95],
    //     car_2: [93],
    //     laps_1: 3,
    //     laps_2: 3
    // }

     
    constructor(props) {
        super(props);
        this.state = {
            finishTiles: [101, 102, 103, 104, 105],
            obstacles: [107, 106, 99, 100, 123, 124, 157, 158, 140, 141, 175, 174, 192, 191, 209, 208, 226, 225, 242, 241, 258, 259, 275, 274, 291, 292, 309, 308, 116,
                133, 150, 167, 184, 201, 218, 235, 117, 252, 269, 286, 303, 320, 337, 326, 325, 343, 342, 360, 359, 377, 376, 394, 393, 409, 426, 443, 460, 477, 494, 511, 
                529, 547, 371, 388, 405, 422, 439, 456, 473, 490, 507, 524, 354, 541, 559, 576, 577, 595, 613, 614, 615, 616, 617, 618, 619, 620, 604, 588, 572, 556, 540, 
                523, 506, 489, 472, 548, 549, 550, 534, 518, 501, 454, 436, 418, 417, 433, 500, 515, 516, 497, 479, 461, 444, 517, 533, 532, 531, 530, 514, 513, 512, 496, 
                495, 478, 410, 415, 398, 381, 365, 349, 333, 316, 299, 266, 249, 232, 283, 216, 200, 193, 177, 176, 161, 144, 128, 111, 93, 92, 91, 90, 89, 183, 166, 149, 
                132, 115, 98, 81, 63, 45, 28, 10, 27, 9, 8, 7, 6, 5, 4, 3, 2, 1, 17, 33, 49, 66, 83, 160, 159, 143, 142, 127, 126, 125, 110, 109, 108, 74, 566, 13,12,11,30,
                29,16,15,14,47,46,32,31,64,48,65,82,217,234,233,251,250,268,267,285,284,302,301,300,319,318,317,336,335,334,353,352,351,350,370,369,368,367,366,387,386,385,
                384,383,382,404,403,402,401,400,399,421,420,419,416,438,437,455,557,574,573,591,590,589,608,607,606,605,625,624,623,622,621,612,611,610,609,594,593,592,575,558],
            car_1: [121],
            car_2: [119],
            laps_1: this.props.location.state.laps,
            laps_2: this.props.location.state.laps,
            track: this.props.location.state.track
        };
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
                console.log(this.state.laps_1)
                console.log(this.state.track)
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
    componentDidMount = ()=>{
        socket.on('yes_move_car_1',(position,bandera)=>{
            console.log("CARRO 1")
            if(bandera===1){
                this.move_up_1(position)
                
            }
            else if (bandera===2){
                this.move_down_1(position);

            }
            
            else if (bandera===3){
                this.move_right_1(position);

            }
            
            else if (bandera===4){
                this.move_left_1(position);

            }
        })

        socket.on('yes_move_car_2',(position,bandera)=>{
            console.log("CARRO 2")
            if(bandera===1){
                
                this.move_up_2(position)
                
            }
            else if (bandera===2){
                this.move_down_2(position);

            }
            
            else if (bandera===3){
                this.move_right_2(position);

            }
            
            else if (bandera===4){
                this.move_left_2(position);

            }
        })
       
        return()=>{socket.off()}
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

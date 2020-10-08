import { Column } from './column.js';
// import { ConnectFour } from "./connect-four.js"

export class Game {
    constructor(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
        this.currentPlayer = 1;
        this.columns = [0, 1, 2, 3, 4, 5, 6];
    }

    getName() {
        return `${this.player1} vs ${this.player2}`;
    }

    playInColumn() {

        if (this.currentPlayer === 1) {

            return this.currentPlayer = 2;
        } else {
            return this.currentPlayer = 1;
        }

    }

    clickTargets = document.getElementById('click-targets');
        clickTargets.addEventListener("click", event => {
            let currentColumn = clickTargets.slice(7);
            console.log(currentColumn);
        }


}

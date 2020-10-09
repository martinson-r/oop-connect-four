import { Column } from './column.js';
// import { ConnectFour } from "./connect-four.js"

export class Game {
    constructor(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
        this.currentPlayer = 1;
        this.columns = [new Column(),new Column(),new Column(),new Column(),new Column(),new Column(),new Column(),];
        this.winnerNumber = 0;
    }

    getName() {
        return `${this.player1} vs ${this.player2}`;
    }

    getTokenAt (rowIndex, columnIndex) {
        return this.columns[columnIndex].getTokenAtRow(rowIndex);
    }

    checkForTie() {
        if (this.columns.every(isFull() === true)) {
            this.winnerNumber = 3;
        } else {
            return "${player1} ties with ${player2}";
        }


        // for (let i = 0; i <= 6; i++) {
        //     if (this.columns[i].isFull() === false) {
        //         return false;
        //     } else {
        //         this.winnerNumber = 3;
        //     }
        // }
    }

    playInColumn(columnIndex) {
        this.columns[columnIndex].add(this.currentPlayer);
        checkForTie();

        if (this.currentPlayer === 1) {
            return this.currentPlayer = 2;
        } else {
            return this.currentPlayer = 1;
        }

    }

    isColumnFull(columnIndex) {
        return this.columns[columnIndex].isFull();
    }



}

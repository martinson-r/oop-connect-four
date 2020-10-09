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
        if (this.winnerNumber === 3) {
            return `${this.player1} ties with ${this.player2}`;
        }
        return `${this.player1} vs ${this.player2}`;
    }

    getTokenAt (rowIndex, columnIndex) {
        return this.columns[columnIndex].getTokenAtRow(rowIndex);
    }

    checkForTie() {
        if (this.columns.every(this.columns.isFull())) {
            this.winnerNumber = 3;
        }
        return false;
    }

    playInColumn(columnIndex) {
        this.columns[columnIndex].add(this.currentPlayer);
        this.checkForTie();
        console.log(this.checkForTie());
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

import { Column } from './column.js';
// import { ConnectFour } from "./connect-four.js"
import { ColumnWinInspector } from './column-win-inspector.js';

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
        if (this.winnerNumber === 1) {
            return `${this.player1} Wins!!`;
        }
        if (this.winnerNumber === 2) {
            return `${this.player2} Wins!!`;
        }

        return `${this.player1} vs ${this.player2}`;
    }

    getTokenAt (rowIndex, columnIndex) {
        return this.columns[columnIndex].getTokenAtRow(rowIndex);
    }

    checkForTie() {
        if (this.columns.every((column) => column.isFull())) {
            this.winnerNumber = 3;
        }
        return false;


    }

    checkForColumnWin() {
        if (this.winnerNumber !== 0) {
            return;
        }

        for (let column of this.columns) {
            const inspector = new ColumnWinInspector(column);
            const winnerNumber = inspector.inspect();
            console.log(this.winnerNumber);

            if (winnerNumber === 1 || winnerNumber === 2) {
                this.winnerNumber = winnerNumber;
            }

    }
}

    playInColumn(columnIndex) {
        this.columns[columnIndex].add(this.currentPlayer);
        this.checkForTie();
        this.checkForColumnWin();
        this.checkForRowWin();

        if (this.currentPlayer === 1) {
            return this.currentPlayer = 2;
        } else {
            return this.currentPlayer = 1;
        }
    }

    isColumnFull(columnIndex) {
        if (this.winnerNumber === 1 || this.winnerNumber === 2) {
        return true;
        }
        return this.columns[columnIndex].isFull();
    }

    checkForRowWin() {

    }



}

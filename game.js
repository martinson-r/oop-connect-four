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
        for ( let i = 0; i <= 6; i++) {
            let columnToInspect = this.columns[i];
        //     if (column-win-inspector.inspect(columnToInspect) === 1) {
        //         this.winnerNumber = 1;
        //     } else if (column-win-inspector.inspect(columnToInspect) === 2) {
        //         this.winnerNumber = 2;
        // }
    }
}

    playInColumn(columnIndex) {
        this.columns[columnIndex].add(this.currentPlayer);
        this.checkForTie();

        if (this.winnerNumber != 0) {
            return false;
        } else {
            this.checkForColumnWin();
        }

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

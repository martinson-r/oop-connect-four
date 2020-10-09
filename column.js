import { Game } from './game.js';

export class Column {
    constructor() {
        this.tokens = [null, null, null, null, null, null];
    }

    add(currentPlayer) {
      for (let i = 5; i >= 0; i--) {
        if (this.tokens[i] === null) {
          this.tokens[i] = currentPlayer;
          break;
        }
      }
    }

    getTokenAtRow(rowIndex) {
      return this.tokens[rowIndex]
    }

    isFull() {
      if (this.tokens[0] !== null) {
        return true;
      } else {
        return false;
      }
    }
}

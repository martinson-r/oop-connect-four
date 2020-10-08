import { Game } from './game.js';

export class Column {
    constructor() {
        this.tokens = [];
    }

    add() {
      this.tokens.push(currentPlayer);
    }

    getTokenAt() {
      for (let i = 5; i >= 0; i--) {
        if (this.tokens[i] === undefined) {
          return null;
        }
        if (this.tokens[i] === 1) {
          return 1;
        }
        if (this.tokens[i] === 2) {
          return 2;
        }
      }
    }
}

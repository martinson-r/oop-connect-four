import { Game } from "./game.js";
import { Column } from "./column.js";

export class ColumnWinInspector {
    constructor (columnObj) {
        this.columnObj = columnObj;
    }

    inspect() {
        for (let i = 0; i <= 2; i++) {
            let currentToken = column.getTokenAtRow(i);
            let nextToken = column.getTokenAtRow(i + 1);
            let nextToken1 = column.getTokenAtRow(i + 2);
            let nextToken2 = column.getTokenAtRow(i + 3);
            if (currentToken === nextToken &&
                nextToken === nextToken1 &&
                nextToken1 === nextToken2 &&
                currentToken != null) {
                //game.winnerNumber = currentToken;
                console.log(currentToken);
                return currentToken;
                //console.log(game.winnerNumber);
        }
        }
        console.log("nope!");
        return 0;

    }
}

import { Game } from "./game.js";

export class ColumnWinInspector {
    constructor (columnObj={}) {
        this.columnObj = columnObj;
    }

    inspect(columnObj) {
        for (let i = 0; i <= 6; i++) {
            if (columnObj.game.updateUI.playerChip) {
                console.log(game.updateUI.playerChip);
                return game.updateUI.playerChip;
            }
        }
        console.log("nope!");
        return 0;

    }
}

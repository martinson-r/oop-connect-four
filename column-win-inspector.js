import { Game } from "./game";

export class ColumnWinInspector {
    constructor (columnObj={}) {
        this.columnObj = columnObj;
    }

    inspect() {
        for (let i = 0; i <= 6; i++) {
            if (columnObj[i].game.updateUI.playerChip) {

            }
        }
    }
}

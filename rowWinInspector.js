export class RowWinInspector {
    constructor(columns) {
        this.columns = [{}, {}, {}, {}];
    }

    inspect() {
        for (let i = 0; i <= 6; i++) {
            let currentToken = this.columns.getTokenAt(i);
            let nextToken = this.columns.getTokenAtRow(i + 1);
            let nextToken1 = this.columns.getTokenAtRow(i + 2);
            let nextToken2 = this.columns.getTokenAtRow(i + 3);

            if (currentToken === nextToken &&
                nextToken === nextToken1 &&
                nextToken1 === nextToken2 &&
                currentToken != null) {

                    return currentToken;
            } else {
                return 0;
            }
        }
    }
}

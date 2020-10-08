import { Game } from './game.js';

let game = undefined;

let updateUI = function () {
    let boardHolder = document.getElementById("board-holder");
    if (game === undefined) {
        boardHolder.setAttribute("class", "is-invisible");
    } else {
        boardHolder.classList.remove("is-invisible");
        let gameName = document.getElementById("game-name");
        gameName.innerHTML = game.getName();
        let clickTargets = document.getElementById('click-targets');
        if (game.currentPlayer === 1) {
            clickTargets.classList.add("black")
            clickTargets.classList.remove("red");
        } else {
            clickTargets.classList.add("red");
            clickTargets.classList.remove("black");
        }

        for (let i = 0; i <= 5; i++) {
            let rowIndex = i;
            for (let j = 0; j <= 6; j++) {
                let columnIndex = j;
                const square = document.querySelector(`#square${rowIndex}-${columnIndex}`);
                square.innerHTML = '';
                let playerChip = game.getToken(rowIndex, columnIndex);
            }
        }
    }
}

window.addEventListener("DOMContentLoaded", event => {
    let player2 = document.getElementById('player-2-name');
    let player1 = document.getElementById('player-1-name');
    let newGame = document.getElementById('new-game');

    player1.addEventListener("keyup", event => {
        if (player1.value && player2.value) {
            newGame.disabled = false;
        } else {
            newGame.disabled = true;
        }
    });
    player2.addEventListener("keyup", event => {
        let newGame = document.getElementById('new-game');
        if (player1.value && player2.value) {
            newGame.disabled = false;
        } else {
            newGame.disabled = true;
        }
    });

    newGame.addEventListener("click", event => {
        game = new Game(player1.value, player2.value);
        newGame.disabled = true;
        updateUI();
    });

   let clickTargets = document.getElementById('click-targets');
   clickTargets.addEventListener("click", event => {
        let targetId = event.target.id;
        if (!targetId.startsWith("column-")) return;
        let columnIndex = Number.parseInt(targetId[targetId.length - 1]);
        game.playInColumn(columnIndex);
        updateUI();
        console.log(game.columns)
    });
});

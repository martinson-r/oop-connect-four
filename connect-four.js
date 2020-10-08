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
        if (game.currentPlayer === 1) {
            this.event.target.setAttribute("class", "black")
            this.event.target.remove("red");
        } else {
            this.event.target.setAttribute("class", "red");
            this.event.target.remove("black");
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

    let clickTargets = document.querySelectorAll(".click-target");
    clickTargets.forEach(target => {
        target.addEventListener("click", event => {
            game.playInColumn();
            updateUI();
        })
    })
    //getElementById('click-targets');
    // clickTargets.addEventListener("click", event => {
    //     game.playInColumn();
    //     updateUI();
    // });
});

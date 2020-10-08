import { Game } from './game.js';

let game = undefined;

window.addEventListener("DOMContentLoaded", event => {
    let player2 = document.getElementById('player-2-name');
    let player1 = document.getElementById('player-1-name');
    player1.addEventListener("keyup", event => {
        let newGame = document.getElementById('new-game');
        if (player1 && player2) {
            newGame.disabled = false;
        }
        newGame.disabled = true;
    });
});

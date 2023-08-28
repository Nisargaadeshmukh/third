

const Player = require('./Player');

const Game = require('./Game');

const player1 = new Player('Player 1', 'X');
const player2 = new Player('Player 2', 'O');
const game = new Game(player1, player2);

const move1 = game.play(0);
console.log(move1);

const move2 = game.play(4);
console.log(move2);

const move3 = game.play(1)
console.log(move3);

const move4 = game.play(5)
console.log(move4);

const move5 = game.play(2)
console.log(move5);

const move6 = game.play(6);
console.log(move6)
const move7 = game.play(7);
console.log(move7)
const move8 = game.play(3);
console.log(move6)
const move9 = game.play(8);
console.log(move9)




// Continue making moves and displaying results

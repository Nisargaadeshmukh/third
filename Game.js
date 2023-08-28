const Board = require('./Board');
const Player = require('./Player');

class Game {
  constructor(player0Name, player1Name) {
    this.board = new Board(); //creating instance of board to connect game with board class
    this.turn = 0;
    this.players = [new Player(player0Name, 'X'), //creating 2 instances of player class which const will hold player name and symbol
     new Player(player1Name, 'O')];
  }

  static newGame(player0Name, player1Name) {
    if (
      player0Name === player1Name ||
      typeof player0Name !== 'string' ||
      typeof player1Name !== 'string'
    ) {
      return ['invalid parameters', null];
    }
    return ['obj created', new Game(player0Name, player1Name)]; // game class obj and passed two params player0name and player1name bcos why we passed this inside obj is we passed two args in const so think how we did it in c#
  }

  // play meth to make move in game
  play(cellNumber) { //play meth will take cellnumber as player has to choose theindex positon like 1 ,2 on which the player wants to put X or O
    if (this.board.isCellMarked(cellNumber)) {  // as iscellmarked meth is holding cell is not empty means u  cant place val in that cell
      return 'cell not empty';
    }

    const currentPlayer = this.turn % 2 === 0 ? this.players[0] : this.players[1]; //even :player0 turn  , odd:player1 turn

    this.board.cells[cellNumber].markCell(currentPlayer.symbol); //markcell property in cell class
    this.turn++;

    if (this.board.checkWin()) {
      return `${currentPlayer.name} wins!`;
    } else if (this.turn === 9) {
      return 'tie game';
    } else {
      return 'success';
    }
  }
}

module.exports = Game;

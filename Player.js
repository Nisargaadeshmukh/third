
class Player {
  constructor(name, symbol) {
    this.name = name;
    this.symbol = symbol;
  }

  getName() {
    return this.name;
  }

  getSymbol() { // Change getMark to getSymbol for consistency
    return this.symbol;
  }
}


module.exports = Player;
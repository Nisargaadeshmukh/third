
class Cell {
  constructor() { // when a new cell obj will be created it will be empty first so e
    this.mark = 'E'; // Initialize the mark as empty ('E')
  }

  markCell(symbol) {
    this.mark = symbol;
  }

  isEmpty() {
    return this.mark === 'E'; // Check if the cell is empty
  }
}

  
module.exports = Cell;
const Cell = require('./Cell');


class Board {
  constructor() {
    this.cells = Array.from({ length: 9 }, () => new Cell()); // Initialize cells using an array
  }

  isCellMarked(cellNumber) {
    return !this.cells[cellNumber].isEmpty(); // is not empty
  }


  checkWin(){
      if (this.cells[0]==  this.cells[1] && this.cells[1]
      == this.cells[2] && ! this.cells[0].isEmpty() ){
        return this.cells[0].mark , "winner"
      
    }
    if (this.cells[3]==  this.cells[4] && this.cells[4]
      == this.cells[5] && ! this.cells[0].isEmpty() ){
        return this.cells[3].mark , "winner"
      }
      if (this.cells[6]==  this.cells[7] && this.cells[7]
        == this.cells[8] && ! this.cells[0].isEmpty() ){
          return this.cells[6].mark , "winner"    
    }
    if(this.cells[0]== this.cells[3]&& this.cells[3] == this.cells[6]
       &&! this.cells[0].isEmpty()){

        return this.cells[0].mark , "winner"
       }

       if(this.cells[1]== this.cells[4]&& this.cells[4] == this.cells[7]
        &&! this.cells[1].isEmpty()){
 
         return this.cells[1].mark , "winner"
        }
        if(this.cells[2]== this.cells[5]&& this.cells[5] == this.cells[8]
          &&! this.cells[2].isEmpty()){
   
           return this.cells[2].mark , "winner"
          }

          if(this.cells[0]== this.cells[4]&& this.cells[4] == this.cells[8]
            &&! this.cells[0].isEmpty()){
     
             return this.cells[0].mark , "winner"
            }

            if(this.cells[2]== this.cells[4]&& this.cells[4] == this.cells[6]
              &&! this.cells[2].isEmpty()){
       
               return this.cells[2].mark , "winner"
              }

      
            }
  }

module.exports = Board
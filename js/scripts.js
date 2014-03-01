var Player = {

  all: [],

  initialize : function(symbol) {
    this.symbol = symbol;
  },

  create : function(symbol) {
    var playerInstance = Object.create(Player);
    playerInstance.initialize(symbol);
    Player.all.push(playerInstance);
    return playerInstance;
  }

};

var Space = {

  all: [],

  initialize : function(posx, posy) {
    this.xCoordinate = posx;
    this.yCoordinate = posy;
  },

  create : function(posx, posy) {
    var spaceInstance = Object.create(Space);
    spaceInstance.initialize(posx,posy);
    Space.all.push(spaceInstance);
    return spaceInstance;
  },

  markBy : function(player) {
    this.markedBy = player;
    return player;
  },

  find : function(posx, posy) {
    var matchedSpaces = Space.all.filter(function(space) {
      return posx === space.xCoordinate && posy === space.yCoordinate;
    });
    console.log(matchedSpaces[0]);
    return matchedSpaces[0];
  }
};

var Board = {

  initialize : function(posx, posy) {

    this.spaces = [];
    for (var x = 1; x <= 3; x++) {
      for (var y = 1; y <= 3; y++) {
        this.spaces.push(Space.create(x,y));
      };
    };
    console.log(this.spaces[0]);
  },

  winner : function() {
    var match = this.spaces.filter(function(space) {
      return space.markedBy !== undefined && 
      ((space.xCoordinate === 1 || 2 || 3) 
      || (space.yCoordinate === 1 || 2 || 3) 
      || (space.yCoordinate === space.xCoordinate) 
      || (space.xCoordinate + space.yCoordinate === 4));
    });
    console.log(match);
    if (match.length === 3) {
      return true;
    } else {
      return false;
    }
  }
};

var Game = {
  createGame: function(player1, player2) {
    var gameCreate = Object.create(Game);
    var newBoard = Object.create(Board);
    newBoard.initialize();
    gameCreate.initialize(player1, player2);
    return gameCreate;
  },

  // createBoard: function() {
  //   var createBoard = Object.create(Board);
  //   newBoard.initialize()
  // }
  initialize: function(player1,player2) {
    this.player1 = player1;
    this.player2 = player2;
  },

  playerSwitch: function(currentPlayer) {
   if (currentPlayer === "O") {
    currentPlayer = "X";
   } else {
    currentPlayer = "O";
   }
   return currentPlayer;
}
};

$(document).ready.getElementById("canvas");


// TO DO:
// - JQuery
// - Initialize Game + Board
// - Assign Players 
// - Mark Symbols on appropriate squares




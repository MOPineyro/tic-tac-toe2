var Player = {
  initialize: function (symbol) {
    this.symbol = symbol;
  },
  createPlayer: function(symbol) {
    var player = Object.create(Player);
    player.initialize(symbol);
    return player;
  }
};

var Space = {
  initialize: function(xcoordinate,ycoordinate) {
    this.xcoordinate = xcoordinate;
    this.ycoordinate = ycoordinate;
  },
  createSpace: function(xcoordinate,ycoordinate) {
    var space = Object.create(Space);
    space.initialize(xcoordinate,ycoordinate);
    return space;
  },

  markBy: function(markedBy) {
    this.markedBy = markedBy; 
  } 
};

var Board = {

  spaces: [],
  createSpaces: function() {
    var board = Object.create(Board);
    for (var i = 1; i <= 3; i++) {
      for (var j = 1; j <= 3; j++) {
        var space = Space.createSpace(i,j);
        Board.spaces.push(Space);
      }
    }
  }
};

var Game = {
  createGame: function(player1, player2) {
    var gameCreate = Object.create(Game);
    gameCreate.initialize(player1, player2);
    return gameCreate;
  },
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

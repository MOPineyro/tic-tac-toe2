describe("Player", function() {
  describe("initialize", function() {
    it("is initialized with a symbol", function() {
      var testPlayer = Object.create(Player);
      testPlayer.initialize("X");
      testPlayer.symbol.should.equal("X");
    });
  });

  describe("create", function() {
    it("creates a new player object", function() {
      var testPlayer = Player.create("X");
      Player.isPrototypeOf(testPlayer).should.equal(true);
    });
  });
});

describe("Space", function() {
  describe("initialize", function() {
    it("is initialized with an x and y coordinate", function() {
      var testSpace = Object.create(Space);
      testSpace.initialize(1, 2);
      testSpace.xCoordinate.should.equal(1);
      testSpace.yCoordinate.should.equal(2);
    });
  });

  describe("create", function() {
    it("Creates positions on a board", function() {
      var testSpace = Space.create(1,2);
      Space.isPrototypeOf(testSpace).should.equal(true);
    });
  });

  describe("markBy", function() {
    it("Lets a player mark the space", function() {
      var testPlayer = Player.create("X");
      var testSpace = Space.create(1,2);
      testSpace.markBy(testPlayer);
      testSpace.markedBy.should.equal(testPlayer);
    });
  });

  describe("find", function() {
    it("returns a space by its coordinates", function() {
      var testSpace = Object.create(Space);
      testSpace.initialize(1, 2);
      // console.log(testSpace.xCoordinate);
      testSpace.find(1,2).should.eql(testSpace);
    });
  });  
});


describe("Board", function() {
  describe("initialize", function() {
    it("Sets up the board with 9 empty Spaces", function() {
      var testBoard = Object.create(Board);
      // var testSpace = Space.create(1,1);
      testBoard.initialize();
      testBoard.spaces.should.equal[9];
    });

    it("Sets up the board with correct coordinates", function() {
      var testBoard = Object.create(Board);
      testBoard.initialize();
      // console.log(testBoard.spaces[5]);
      testBoard.spaces[5].xCoordinate.should.equal(2);
      testBoard.spaces[5].yCoordinate.should.equal(3);
    });
  });
  describe("winner", function() {
    it("Determines winner if 3 in a row", function() {
      var testBoard = Object.create(Board);
      var player1 = Object.create(Player);
      testBoard.initialize();
      testBoard.spaces[6].markBy(player1);
      testBoard.spaces[4].markBy(player1);
      testBoard.spaces[2].markBy(player1);
      console.log(testBoard.spaces[0]);
      console.log(testBoard.spaces[1]);
      console.log(testBoard.spaces[2]);
      testBoard.winner(player1).should.equal(true);
      // Board.winner.should.equal("player1");
    })
  })
});

describe("Game", function(){
  describe('createGame', function() {
    it("creates a game", function() {
      var testGame = Object.create(Game);
      var testBoard = Object.create(Board);
      Board.isPrototypeOf(newBoard).should.equal(true);
      Game.isPrototypeOf(testGame).should.equal(true);
    });
  // });
  // describe("createBoard", function()) {
  //   it('creates a board', function()) {
  //     var testBoard = Ob
  //   }
  // }
  describe("initialize", function() {
    it("creates a new game instance with 2 new players and new board", function() {
      var testGame = Game.createGame("X","O");
      testGame.initialize();
      testGame.player1 === "X";
      testGame.player2 === "O";
    });
  });
  describe("playerSwitch", function() {
    it("switches the player's turn", function(){
      var testGame = Game.createGame("X","O");
      testGame.playerSwitch("O").should.equal("X");
    });
  });
});
});




//   describe("assign", function() {
//     it("Will assign playerOne an X", function() {
//       var playerOne = Object.create(Player);      
//       playerOne.assign("x");
//       playerOne.letter.should.equal("x");
//     });

//     it("Will assign playerTwo an O", function() {
//       var playerTwo = Object.create(Player);
//       playerTwo.assign();
//       playerTwo.letter.should.equal("o");
//     });
//   });
// });


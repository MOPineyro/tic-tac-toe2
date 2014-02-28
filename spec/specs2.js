describe("Player", function(){
  describe("initialize", function(){
    it("assigns a symbol to a player", function(){
      var testPlayer = Object.create(Player);
      testPlayer.initialize("X");
      testPlayer.symbol.should.equal("X");
    });
  });

  describe("createPlayer", function(){
    it("creates a new Player object", function() {
      var testPlayer = Player.createPlayer("X");
      Player.isPrototypeOf(testPlayer).should.equal(true);
    });
  });
});

describe("Space", function() {
  describe('initialize', function() {
    it('should return a space by it coordinates', function() {
      var testSpace = Object.create(Space);
      testSpace.initialize(2,3);
      testSpace.xcoordinate.should.equal(2);
      testSpace.ycoordinate.should.equal(3);
    });
  });
  describe("createSpace", function() {
    it("should create a new space", function() {
      var testSpace = Space.createSpace(2,3);
      Space.isPrototypeOf(testSpace).should.equal(true);
    });
  });

  describe('markBy', function() {
    it('lets a player mark a space', function() {
      var testSpace = Space.createSpace(2,3);
      var testPlayer = Player.createPlayer("X");
      testSpace.markBy(testPlayer);
      testSpace.markedBy.should.equal(testPlayer);
    });
  });
});

describe("Board", function(){
  describe("createSpaces", function(){
    it("creates 9 spaces when it is initialized",function(){
      var testBoard = Object.create(Board);
      testBoard.createSpaces();
      testBoard.spaces.length.should.eql(9);
    });
  });
});

describe("Game", function(){
  describe('createGame', function() {
    it("creates a game", function() {
      var testGame = Object.create(Game);
      Game.isPrototypeOf(testGame).should.equal(true);
    });
  });
  describe("initialize", function() {
    it("creates a new game instance", function() {
      var testGame = Game.createGame("X","O");
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

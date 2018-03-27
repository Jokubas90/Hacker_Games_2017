var start;
var visibleGame;
var games = [];

function levelStart() {
  score = 0;
  gen = Neuvol.nextGeneration();
  for(var i = 0; i < 10; i++){
    games[i] = new GameAI();
  }
  //visibleGame = new GamePAI();
  level++;

  /*
  score = 0;
  ships = [];
  gen = Neuvol.nextGeneration();
	for(var i in gen){
		ships.push(new AI());
	}
	generation++;// might be the same as level

  level++;
  asteroids.splice(0, asteroids.length);
  ship = new Ship();
  for (var i = 0; i < 10; i++)
    asteroids.push(new Asteroid());
  */

}

function welcomeScreen() {
  gameIsRuning = false;
  background(0);
  textSize(32);
  fill(255);
  textAlign(CENTER);
  text("Press <ENTER> to start", width / 2, height / 2);
}

function init() {
  gameIsRuning = true;
  gameHasBegun = true;
  levelStart();
}

function loaded() {
  song.loop();
}

var Neuvol; //global
var gen = []; //global
var generation = 0; //..
var ships; //class
var ship; //class
var song; //global
var pew; //global
var boom; //global
var asteroids = []; //class
var lasers = []; //class
var frames; //class
var level = -1; //global
var intensityTime = 60; //global
var gameIsRuning = false; //global
var framesForText = 0; //global
var score = 0; //global
var gameHasBegun = false; //global
var nbSensors = 4; //global

function setup() {
  createCanvas(1300, 600);

  Neuvol = new Neuroevolution({
    population: 10,
    network: [nbSensors, [9], 2],
    randomBehaviour: 0.1,
    mutationRate: 0.5,
    mutationRange: 2,
  });

  song = loadSound("track.wav", loaded);
  pew = loadSound("PEW.wav");
  boom = loadSound("BOOM.wav");

  frames = 0;
  welcomeScreen();
  if (gameIsRuning) {
    levelStart();
  }
}

function draw() {
  // Game running loop
  if(gameHasBegun && gameIsRuning){
    background(0);
    var allAiIsDead = true;
    //visibleGame.GameLoop(0);
    for(var i in games){
      games[i].GameLoop(i);
      if(games[i].gameIsAlive) allAiIsDead = false;
    }

    if(/*!visibleGame.gameIsAlive &&*/ allAiIsDead){
      gameIsRuning = false;
    }
  // Switch between levels
  } else if (gameHasBegun) {
    background(0);
    framesForText++;
    if (framesForText <= 200) {
      text("Next level in: " + (200 - framesForText), width / 2 - 50, height / 2 - 50, width / 2 + 50, height / 2 + 50);
    } else if(framesForText > 200){
      console.log("as esu Else");
      framesForText = 0;
      gameIsRuning = true;
      levelStart();
    }
  }
}

extraAsteroid = function() {
  var side = floor(random(0, 40));
  if (side > 30) {
    asteroids.push(new Asteroid(createVector(-50, floor(random(height)))));
  } else if (side > 20) {
    asteroids.push(new Asteroid(createVector(width + 50, random(height))));
  } else if (side > 10) {
    asteroids.push(new Asteroid(createVector(random(width), -50)));
  } else {
    asteroids.push(new Asteroid(createVector(random(width), height + 50)));
  }
}

setInterval(function() {
  score++;
}, 200);

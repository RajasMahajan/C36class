var database;
var playerCount;
var gameState=0;
var form,player,game;

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(400,400);
  game=new Game();
  game.readState();
  game.start();

  
 
}

function draw(){
  background("white");
  
  
}

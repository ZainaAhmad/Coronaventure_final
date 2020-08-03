var gameState=0;
var player;
var playerImg;
var game;
var playButtonImg;
var backgroundImg;
var ground;
var virusPink;
var virusGreen;
var gameoverPic;
var house;
var win;
var mask;
var sanitizer;


function preload(){
  playerImg=loadAnimation("images/player/run1.png","images/player/run2.png",
  "images/player/run3.png","images/player/run4.png","images/player/run5.png",
  "images/player/run6.png","images/player/run7.png","images/player/run8.png");
  playButtonImg=loadImage("images/blue-play-button.png");
  backgroundImg=loadImage("images/Dark_forest_background.png");
  virusPink=loadImage("images/Virus_pink.png");
  virusGreen=loadImage("images/Virus_green.png");
  gameoverPic=loadImage("images/GameoverPic.png");
  houseImg=loadImage("images/house.png");
  win=loadImage("images/win.png");
  sanitizer=loadImage("images/sanitizer.png");
  mask=loadImage("images/mask.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  player=new Player();
  game=new Game();
  ground=createSprite(width/2,height-10,width,10);
  ground.visible=false;

    
}

function draw() {
  background(255,255,255); 
  image(backgroundImg,0,-10,width*5,height+10);
  if(gameState===0){
    game.start();
  } 
  if(gameState===1){
    game.play();
  }
  if(gameState===2){
    game.end();

  }
  if(gameState===3){
    game.win();
  }
  drawSprites();
}
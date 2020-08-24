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
var surveyButtonImg;
var form;



function preload(){
  playerImg=loadAnimation("images/player/run1.png","images/player/run2.png",
  "images/player/run3.png","images/player/run4.png","images/player/run5.png",
  "images/player/run6.png","images/player/run7.png","images/player/run8.png");
  playButtonImg=loadImage("images/123-removebg-preview.png");
  backgroundImg=loadImage("images/Dark_forest_background.png");
  virusPink=loadImage("images/Virus_pink.png");
  virusGreen=loadImage("images/Virus_green.png");
  gameoverPic=loadImage("images/GameoverPic.png");
  houseImg=loadImage("images/house.png");
  win=loadImage("images/win.png");
  sanitizer=loadImage("images/sanitizer.png");
  mask=loadImage("images/mask.png");
  surveyButtonImg=loadImage("images/survey button.png");
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
  
  if(gameState===0){
    image(backgroundImg,0,-10,width*10,height+10);
    game.start();
  } 
  if(gameState===1){
    image(backgroundImg,0,-10,width*10,height+10);
    game.play();
  }
  if(gameState===2){
    image(backgroundImg,0,-10,width*10,height+10);
    game.end();

  }
  if(gameState===3){
    image(backgroundImg,0,-10,width*10,height+10);
    game.win();
  }
  if(gameState===4){
    background(76,131,135);  
    form.display();
  }
  drawSprites();
}
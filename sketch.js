const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var introText, introTextImg;
var cred1, cred1Img;
//var bgSound;
var playButton, playBImg;
var introFrame, introFrameImg;
var compass, compassImg;
var bg, bgImg;
var islandShore, islandShoreImg;

var INTRO;
var ISLAND;
var gameState = INTRO;

var engine, world;

function preload(){
  introTextImg = loadImage("Images/introText.png");
  cred1Img = loadImage("Images/cred.png");
  playBImg = loadImage("Images/playb.png");
  introFrameImg = loadImage("Images/introframe.png");
  compassImg = loadImage("Images/compass.png");
  islandShoreImg = loadImage("Images/islandShore.png");

  //bgSound = loadSound("bgSound.mp3");

}

function setup(){
  var canvas = createCanvas(window.innerWidth, window.innerHeight);

  engine = Engine.create();
  world = engine.world;

// INTRO SPRITES
  introText = createSprite(900, 200);
  introText.addImage(introTextImg);
  introText.scale = 1.8;

  cred1 = createSprite(200, 20);
  cred1.addImage(cred1Img);
  cred1.scale = 0.7;

  playButton = createSprite(900,500, 200, 100);
  playButton.addImage(playBImg);
  playButton.scale = 1.5;

  /*introFrame = createSprite(1450,520);
  introFrame.addImage(introFrameImg);
  introFrame.scale = 2.3
  */

  compass = createSprite(250, 700);
  compass.addImage(compassImg);

// ISLAND SPRITES
  bg = createSprite(1000,500);
 
  //bg.addAnimation("islandShore", islandShoreImg)
  bg.scale = 0.5;




}

function draw(){



  if(gameState === INTRO && mousePressedOver(playButton)){ 
    background("lightblue");
    bg.addImage("bgImg", introFrameImg);
      gameState = ISLAND;
  }

   if(gameState === ISLAND){
    playButton.visible = false;
    introText.visible = false;
    //introFrame.visible = false;
    compass.visible = false;
    bg.changeAnimation("islandShore", islandShoreImg)
    
  }


  //bgSound.play();
  drawSprites();
  //playButton.display();

  Engine.update(engine);

}


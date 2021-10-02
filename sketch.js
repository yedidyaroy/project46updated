var bgImg1,bgImg2;
var game,form,player;
var pikachu,pikachuImg;
var gameState=0;
var cloud,cloudImg,cloudsGroup;
var redPB,blackPB,redPBImg,blackPBImg,redPBGroup,blackPBGroup;
var invisibleGround;

function preload(){
  bgImg1=loadImage("images/background1.png");
  bgImg2=loadImage("images/background2.jpg");
  pikachuImg=loadAnimation("images/1.png","images/2.png","images/3.png","images/4.png");
  cloudImg=loadImage("images/cloud.png");
  redPBImg=loadImage("images/red pokeball.png");
  blackPBImg=loadImage("images/black pokeball.png");
}

function setup() {
  createCanvas(displayWidth-30,displayHeight-120);
  //createSprite(400, 200, 50, 50);
  game=new Game();
  game.start();
  //console.log(player.name);
}

function draw() {
  if (gameState===1){
    clear();
    game.play();
    spawnClouds();
    var rand = Math.round(random(1,2));
    if (rand===1){
      spawnRedPokeballs();
    }
    else {
      spawnBlackPokeballs();
    }
  } 
 // drawSprites();
}

function spawnClouds() {
  if  (frameCount%150===0){
    cloud=createSprite(displayWidth,100,10,10);
    cloud.addImage(cloudImg);
    cloud.y = Math.round(random(100,160));
    cloud.velocityX=-5;
    cloud.scale=0.2;
    cloud.lifetime=displayWidth/5;
  }
  cloudsGroup.add(cloud);
}

function spawnRedPokeballs() {
  if (frameCount%120===0){
    redPB=createSprite(displayWidth,500,10,10);
    redPB.addImage(redPBImg);
    redPB.velocityX=-5;
    redPB.scale=0.2;
    redPB.lifetime=displayWidth/5;
  }
  redPBGroup.add(redPB);
}

function spawnBlackPokeballs() {
  if (frameCount%200===0){
    blackPB=createSprite(displayWidth,500,10,10);
    blackPB.addImage(blackPBImg);
    blackPB.velocityX=-5;
    blackPB.scale=0.4;
    blackPB.lifetime=displayWidth/5;
  }
  blackPBGroup.add(blackPB);
}
var car,wall;
var speed,weight;
var START= 0;
var PLAY = 1;
var ENDgreen = 2;
var ENDyellow = 3;
var ENDred = 4;
var lets = "let's";
var redCar, greenCar, yellowCar;

var gameState = START;

function preload(){
  redCar = loadImage("red.png");
  greenCar = loadImage("green.png");
  yellowCar = loadImage("yellow.png");
}

function setup() {
  createCanvas(1535,400);

  speed = Math.round(random(55,90));
  weight = Math.round(random(400,1500));

  car = createSprite(50,200,50,50);
  car.shapeColor = "white";

  wall = createSprite(1450,200,80,height/2);
  wall.shapeColor = color(80,80,80);
}

function draw() {
  background(0);

  if(gameState === START){
    car.visible = false;
    wall.visible = false;
    fill("lavender");
    textSize(25);
    textFont("Ink Free");
    text('Hey There!! Welcome to ROAD SAFETY!! The Global Car Safety Organisation tests cars for safety and reliability in the event of a crash.', 20,30);
    text('So, here am I with a project that shows the weight and speed and of a car and the deformation caused by it when it hits a wall. So,',20,70);
    text(lets + ' get going! Hope you like the project, do not forget to hit a like :)',20,110);
    textSize(45);
    text('PRESS SPACE TO CHECK WITH RANDOM VALUES OF SPEED AND WEIGHT!!',2,250);

    if(keyDown("space")){
      gameState = PLAY;
    }
  }
  
  if(gameState === PLAY){
    fill("lavender");
    textSize(25);
    textFont("Ink Free");
    text('Speed : ' + speed ,30,30);
    text('Weight : ' + weight , 270,30);

    wall.visible = true;
    car.visible = true;

    car.velocityX = speed;

   if(wall.x - car.x <= car.width/2 + wall.width/2 ){
      fill("lavender");
      textSize(45);
      textFont("Ink Free");
      text('Press SPACE-BAR to see the result...',170,200);
      car.velocityX = 0;

      var deformation = 0.5 * weight * speed * speed / 22500;
      if(deformation < 100){
        car.shapeColor = color(0,255,0);
      }
      if(deformation > 100 && deformation < 180){
        car.shapeColor = color(230,230,0);
      }
      if(deformation > 180){
        car.shapeColor = color(255,0,0);
      }
      if(deformation < 100 && keyDown('space')){
        gameState = ENDgreen;
      }
      if(deformation > 100 && deformation < 180 && keyDown('space')){
        gameState = ENDyellow;
      }
      if(deformation > 180 && keyDown('space')){
        gameState = ENDred;
      }
    }
  }

  if(gameState === ENDgreen){
    wall.visible = true;
    wall.addImage(greenCar);
    wall.x = 100;
    wall.y = 200;
    wall.scale = 0.5;

    fill("lavender");
    textSize(35);
    textFont("Ink Free");
    text('Great going! So, we have got no bad damages on our car :)',350,200);
    text('I fully support this model!!',450,300);
  }

  if(gameState === ENDyellow){
    wall.visible = true;
    wall.addImage(yellowCar);
    wall.x = 150;
    wall.y = 200;
    wall.scale = 0.5;

    fill("lavender");
    textSize(35);
    textFont("Ink Free");
    text('Quite devastating! Might be some changes would be good',410,200);
    text('Support provided , bit changes needed :)',460,300);
  }
  
  if(gameState === ENDred){
    wall.visible = true;
    wall.addImage(redCar);
    wall.x = 150;
    wall.y = 200;
    wall.scale = 0.5;

    fill("lavender");
    textSize(45);
    textFont("Ink Free");
    text('Gosh! People might be killed!!!', 410,200);
    text('Cannot support it!!!',460,300);
  }

  drawSprites();
}
//creating variables of every  object 
var play = 1;
var end = 0;
var gameState = play;
var bow, arrow, redballoon, pinkballoon, blueballoon, greenballoon, background;
var bowimage, arrowimage, redballoonimage, pinkballoonimage, blueballoonimage, greenballoonimage, background1image, arrowGroup, redballoonGroup, blueballoonGroup, greenballoonGroup, pinkballoonGroup;
var score = 0;
// loading the animation and images 
function preload() {
  backgroundimage = loadImage("background0.png");
  bowimage = loadImage("bow0.png");
  arrowimage = loadImage("arrow0.png");
  redballoonimage = loadImage("red_balloon0.png");
  pinkballoonimage = loadImage("pink_balloon0.png");
  greenballoonimage = loadImage("green_balloon0.png");
  blueballoonimage = loadImage("blue_balloon0.png");
}

function setup() {
  // creating background sprite and giving the image
  createCanvas(500, 400);
  background1 = createSprite(0, 0, 600, 600);
  background1.addImage(backgroundimage);
  background1.scale = 2;
  //creating bow sprite
  bow = createSprite(410, 300, 1, 1);
  bow.addImage(bowimage);
  bow.scale = 1;
  //creating groups
  arrowGroup = createGroup();
  redballoonGroup = createGroup();
  blueballoonGroup = createGroup();
  greenballoonGroup = createGroup();
  pinkballoonGroup = createGroup();
}

function draw() {
  //making what things to happen in varioug gamestates
  if (gameState === play) {
    //making  infinite scrolling for background 
    background1.velocityX = -2;
    if (background1.x < 0) {
      background1.x = background1.width / 2;
    }
    //making the bow to move with the mouse
    bow.y = World.mouseY;
    //making the arrow to shoot when space is clicked
    if (keyDown("space")) {
      createarrow();
      if (arrow.x < 0) {
        arrow.x = 470
        arrow.y = bow.y
        arrow.velocityX = 0
      }
    }
    //creating the various types of balloons using random at a frame count of 80
    var selectballoon = Math.round(random(1, 5));
    if (frameCount % 80 === 0) {
      if (selectballoon == 1) {
        redballoon();
      } else if (selectballoon == 2) {
        pinkballoon();
      } else if (selectballoon == 3) {
        greenballoon();
      } else if (selectballoon == 4) {
        blueballoon();
      }
    }
    //making the various types of balloons to disappear  when the arrows touches the balloons and to disappear the arrow 
    if (arrowGroup.isTouching(redballoonGroup)) {
      redballoonGroup.destroyEach();
      arrowGroup.destroyEach();
      score += 1
    }
    if (arrowGroup.isTouching(pinkballoonGroup)) {
      pinkballoonGroup.destroyEach();
      arrowGroup.destroyEach();
      score += 2
    }
    if (arrowGroup.isTouching(greenballoonGroup)) {
      greenballoonGroup.destroyEach();
      arrowGroup.destroyEach();
      score += 3
    }
    if (arrowGroup.isTouching(blueballoonGroup)) {
      blueballoonGroup.destroyEach();
      arrowGroup.destroyEach();
      score += 4
    }
  } else if (gameState == end) {

  }
  //creating sprite objects
  drawSprites();
  //drawing scores using text
  text.size = 20;
  text("score:" + score, 270, 30);
}
//creating my own function of red balloons
function redballoon() {
  var redballoon = createSprite(0, Math.round(random(20, 370)), 10, 10);
  redballoon.addImage(redballoonimage);
  redballoon.scale = 0.1;
  redballoon.velocityX = 3
  redballoon.lifetime = 166;
  redballoonGroup.add(redballoon)
}
//creating my own function of pink balloons
function pinkballoon() {
  var pinkballoon = createSprite(0, Math.round(random(20, 370)), 10, 10);
  pinkballoon.addImage(pinkballoonimage);
  pinkballoon.scale = 1.3;
  pinkballoon.velocityX = 3
  pinkballoon.lifetime = 166;
  pinkballoonGroup.add(pinkballoon);
}
//creating my own function of green balloons
function greenballoon() {
  var greenballoon = createSprite(0, Math.round(random(20, 370)), 10, 10);
  greenballoon.addImage(greenballoonimage);
  greenballoon.scale = 0.1;
  greenballoon.velocityX = 3;
  greenballoon.lifetime = 166;
  greenballoonGroup.add(greenballoon);
}
//creating my own function of blue balloons
function blueballoon() {
  var blueballoon = createSprite(0, Math.round(random(20, 370)), 10, 10);
  blueballoon.addImage(blueballoonimage);
  blueballoon.scale = 0.1;
  blueballoon.velocityX = 3
  blueballoon.lifetime = 166;
  blueballoonGroup.add(blueballoon);
}
//creating my own function of arrow sprite
function createarrow() {
  //creating arrow sprite
  arrow = createSprite(450, 300);
  arrow.addImage(arrowimage);
  arrow.scale = 0.4;
  arrow.y = bow.y
  arrow.velocityX = -4;
  arrow.lifetime = 150;
  arrowGroup.add(arrow);
}
var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var obstacle;
function preload() {
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  trex_collided = loadImage("trex_collided.png");
obstacle =loadImage("obstacle1.png");
  groundImage = loadImage("ground2.png")
}

function setup() {
createCanvas(600, 200);

//create a trex sprite
trex = createSprite(50,160,20,50);
trex.addAnimation("running", trex_running);
trex.scale = 0.5;
  invisibleGround = createSprite(210,185,400,20);

 invisibleGround.visible = false;
ground = createSprite(200,180,400,20);
ground.addImage("ground",groundImage);
ground.x = ground.width /2;
ground.velocityX = -4;
  
}

function draw() {
background(220);

//jump when the space button is pressed
if (keyDown("space")&& trex.y>=130) {
  trex.velocityY = -10;
}

trex.velocityY = trex.velocityY + 0.8

if (ground.x < 0) {
  ground.x = ground.width / 2;
}
trex.collide(invisibleGround);


drawSprites();
}
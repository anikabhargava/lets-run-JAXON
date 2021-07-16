var path, pathImage
var boy, boy_running

var lb, rb

function preload(){
  //pre-load images
  pathImage = loadImage("path.png")
  boy_running = loadAnimation("Runner-1.png","Runner-2.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200,200)
  path.addImage(pathImage)
  path.velocityY=4
  path.scale=1.2
  
  lb = createSprite(20,200,40,400);
  rb = createSprite(380,200,40,400);
  lb.visible = false;
  rb.visible = false;

  boy = createSprite(180,350)
  boy.addAnimation("running",boy_running)
  boy.scale = 0.1

}

function draw() {
  background(0);
  if(path.y > 400){
    path.y = height/2;
  }
  boy.x = mouseX
  boy.collide(lb);
  boy.collide(rb);
  drawSprites();
}

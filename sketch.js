var fixedRect,movingRect;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 80, 30);
  movingRect = createSprite(400, 800, 50, 50);
  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";
  movingRect.velocityY = -5 ;
  fixedRect.velocityY = 5 ;
}

function draw() {
  background(0,0,0); 
  //World.mouseXmovingRect.x = ;
  //movingRect.y = World.mouseY; 
  if(movingRect.x-fixedRect.x < fixedRect.width/2 + movingRect.width/2 && fixedRect.x-movingRect.x <fixedRect.width/2 + movingRect.width/2 && movingRect.y-fixedRect.y < fixedRect.height/2 + movingRect.height/2 && fixedRect.y-movingRect.y <fixedRect.height/2 + movingRect.height/2 ){
    fixedRect.velocityX = fixedRect.velocityX * (-1);
    movingRect.velocityX = movingRect.velocityX * (-1);
    fixedRect.velocityY = fixedRect.velocityY * (-1);
    movingRect.velocityY = movingRect.velocityY * (-1);
  }
  else{
    fixedRect.shapeColour = "green";
    movingRect.shapeColor = "green";
  }

  drawSprites();
}
var fixedRect, movingRect, j1, j2;

function setup() {
  createCanvas(1200,800);
  j1= createSprite(400,500,0,10);
  j2=createSprite(200,400,10,50);
  j1.shapeColor="red"
  j2.shapeColor="red"
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
if(isTouching(movingRect,j2))
  {
    movingRect.shapeColor="green"
   j2.shapeColor="green"
  }
  else
  {
      movingRect.shapeColor="red"
      j2.shapeColor="red"
  }
  drawSprites();
}
function isTouching(object1, object2)
{
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
  return true
}
else {
  
  return false
}
}
var fixedRect,movingRect;
var obj1,obj2,obj3,ob4;


function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(200, 200, 50, 80);
  movingRect = createSprite(400, 200, 80, 30);
  fixedRect.shapeColor = "red";
  movingRect.shapeColor = "green";

  obj1 = createSprite(100,100,50,50);
  obj2 = createSprite(200,300,50,50);
  obj3 = createSprite(300,100,50,50);
  obj4 = createSprite(400,300,50,50);

  obj2.shapeColor = "purple";
  obj4.shapeColor = "pink";


  obj2.velocityX = 2;
  obj4.velocityX = -2;

}

function draw() {
  background(255,255,255); 

  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if(isTouching(obj1, movingRect)){
    obj1.shapeColor = "yellow";
    movingRect.shapeColor = "blue";
  }
  else{
    obj1.shapeColor = "red";
    movingRect.shapeColor = "green";
  }

  bounceOff(obj2, obj4);

  drawSprites();
}


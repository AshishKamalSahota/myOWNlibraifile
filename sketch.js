var fixedrect,movingrect,gameobject1,gameobject2;
function setup() {
  createCanvas(1200,800);
 
  movingrect=createSprite(400,200,80,30);
  fixedrect=createSprite(400,400,50,80);
  gameobject1=createSprite(200,800,50,80);
  gameobject2=createSprite(200,100,50,80);
  gameobject1.shapeColor="green";
  gameobject2.shapeColor="green";
  gameobject1.velocityY=-5;
  gameobject2.velocityY=5;
  movingrect.shapeColor="green";
  fixedrect.shapeColor="green";
  movingrect.debug=true;
  fixedrect.debug=true; 

}

function draw() {
  background(0);
  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;
  
  if (isTouching(movingrect,fixedrect)){
    movingrect.shapeColor="blue";
    fixedrect.shapeColor="blue";
  }
  else{
    movingrect.shapeColor="green";
    fixedrect.shapeColor="green";
  }
  bounceoff(gameobject1,gameobject2);
  drawSprites();
}


function setup() {
  createCanvas(800,400);
  fixed= createSprite(400, 200, 50, 50);
  moving= createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);
  moving.y=mouseY
  moving.x=mouseX 
  
  if(moving.y-fixed.y<=fixed.height/2+moving.height/2&&
    fixed.y-moving.y<=fixed.height/2+moving.height/2&&
    moving.x-fixed.x<=fixed.width/2+moving.width/2&&
    fixed.x-moving.x<=fixed.width/2+moving.width/2){
       fixed.shapeColor="red"
       moving.shapeColor="red"
  }
  else{
    fixed.shapeColor="green"
    moving.shapeColor="green"

  }
  drawSprites();
}
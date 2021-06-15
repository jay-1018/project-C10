var ship, ship_moving, edges;
var seaImages;
var sea
function preload(){
  sea = loadImage("sea.png")
  shipImg1 = loadAnimation("ship-1.png,ship-2.png,ship-3.png,ship-4.png")
}
spriteName.addImage(seaImg);
function setup(){
  createCanvas(400,400);
  
  ship = createSprite(50,160,20,50);
  ship.addAnimation("moving", ship_moving);
  edges = createEdgeSprites();
  sea = createSprite(200,180,400,20);

  ship.scale = 0.5;
  ship.x = 50
}

function draw() {
  background("blue");
 sea.velocity=-7

 console.log(sea.x)
 if(sea.x<0){
   sea.x=sea.width/2
  }

   if(keyDown("space")){
     ship.velocityY=-10
   } 

   ship.velocityY = ship.velocityY + 0.5;

 ship.collide(sea)


 drawSprites();
}
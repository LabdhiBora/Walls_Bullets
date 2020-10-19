var car , wall;
var speed,weight;
function setup() {
  createCanvas(1600,400);
  line=createSprite(50,280,4000,10);
  line.shapeColor="white";
  car =createSprite(50,350,50,30);
 
  speed=random(55,90);
  weight=random(400,1500);
  
  car.velocityX=10;

  // car2=createSprite(50,220,50,30);
  // line=createSprite(50,150,4000,10);
  // line.shapeColor="white";
  
  // speed2=random(100,150);
  // car2.velocityX=speed2;

  // car3=createSprite(50,70,50,30);
  // car3.shapeColor="yellow";
  // speed3=random(10,100);
  // car3.velocityX=speed3;

  wall=createSprite(1500,200,60,height);
}

function draw() {
  background(0);  
 if (wall.x-car.x<(car.width+wall.width)/2){
   car.velocityX=0
   var deformation=(0.5 *weight *speed *speed)/22509
   if(deformation>180){
     car.shapeColor="red";
   }
   if (deformation<180 &&  deformation>100){
     car.shapeColor="yellow"
   }
   if(deformation<100){
     car.shapeColor="green";
   }
 }

  drawSprites();
  car.collide(wall);
  // car2.collide(wall);
  // car3.collide(wall);

}
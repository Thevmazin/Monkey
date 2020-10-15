
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivalTime = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
monkey = createSprite(80,315,20,20);  
monkey.addAnimation("moving", monkey_running);
monkey.scale = 0.1

ground = createSprite(400,350,900,10);
ground.velocityX = -4;

FoodGroup = createGroup(); 
obstacleGroup =  createGroup();
}


function draw() {
background ("white");
  
if (ground.x < 0){
      ground.x = ground.width/2;
}
if (keyDown("space")){
monkey.velocityY = -12    
} 
monkey.velocityY = monkey.velocityY + 0.8
monkey.collide(ground);
  
stroke("white");
textSize(20);
fill("white");
text("Score: "+ score, 500,50);
  
stroke("black");
textSize(20);
fill("black");
survivalTime = Math.ceil(frameCount/frameRate())
text("Survival Time: "+survivalTime, 100,50);
 
monkey.lifeTime = (150);  
  
bananas();
obstacles();
  
drawSprites();  
}

function bananas(){
if(frameCount % 80 == 0){
banana = createSprite(400,100,10,10);
banana.y = Math.round(random(120,200));
banana.addImage(bananaImage);
banana.velocityX = -4;
banana.scale = 0.1;
 
FoodGroup.add(banana);  
}
}

function obstacles(){
if(frameCount % 300 == 0){
obstacle = createSprite(400,310,10,10); 
obstacle.addImage(obstacleImage);
obstacle.velocityX = -4;
obstacle.scale = 0.25;

obstacleGroup.add(obstacle);  
} 
}



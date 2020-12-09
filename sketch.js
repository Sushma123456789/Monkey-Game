
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var foodGroup, obstacleGroup;
var survivalTime = 0;
var ground;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")

  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
    monkey = createSprite(100,350,50,50);
    monkey.addAnimation("moving",monkey_running);
    monkey.scale = 0.1;
  
    ground = createSprite(width/2,385,width*2,10);
    //ground.velocityX = -4;
    ground.x = ground.width/2;
  
    foodGroup = createGroup();
    

  
}


function draw() {
  background(250);
  monkey.velocityY = 8;
  monkey.collide(ground);
  
  if(keyDown("space") && monkey.y > 50)
    {
        monkey.velocityY = -10;
    }
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate());
  text("Survival Time: " + survivalTime, 100,50);
  
  drawSprites();
  bananas();
  obstacles();
  console.log(monkey.y)
}

function bananas()
{
    if(frameCount%80==0)
      {
          banana = createSprite(width,random(120,220),20,20);
          banana.addImage(bananaImage);
        banana.scale = 0.1
        banana.velocityX = -5
        banana.lifetime = 75;
        foodGroup.add(banana);
      }
  
    
}    

function obstacles()
{
    if(frameCount%200==0)
      {
          obstacle = createSprite(width,360,20,20);
          obstacle.addImage(obstacleImage);
        obstacle.scale = 0.125;
        obstacle.velocityX = -5;
        obstacle.lifetime = 75;
      }
}






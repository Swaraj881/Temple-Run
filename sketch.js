
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	backgroundimg=loadImage("scrolling-background.jpg");
	playerDead=loadAnimation("Dead_000.png","Dead_001.png","Dead_002.png","Dead_003.png","Dead_004.png","Dead_005.png","Dead_006.png","Dead_007.png","Dead_008.png","Dead_009.png");
	playerIdle=loadAnimation("Idle_000.png","Idle_001.png","Idle_002.png","Idle_003.png","Idle_004.png","Idle_005.png","Idle_006.png","Idle_007.png","Idle_008.png","Idle_009.png");
	playerJump=loadAnimation("Jump_000.png","Jump_001.png","Jump_002.png","Jump_003.png","Jump_004.png","Jump_005.png","Jump_006.png","Jump_007.png","Jump_008.png","Jump_009.png");
	playerRun=loadAnimation("Run_000.png","Run_001.png","Run_002.png","Run_003.png","Run_004.png","Run_005.png","Run_006.png","Run_007.png","Run_008.png","Run_009.png");
	playerSlide=loadAnimation("Slide_000.png","Slide_001.png","Slide_002.png","Slide_003.png","Slide_004.png","Slide_005.png","Slide_006.png","Slide_007.png","Slide_008.png","Slide_009.png");
	monster=loadImage("Attack3.png");
	coin=loadAnimation("Gold_1.png","Gold_2.png","Gold_3.png","Gold_4.png","Gold_5.png","Gold_6.png","Gold_7.png","Gold_8.png","Gold_9.png","Gold_10.png",v,"Gold_11.png","Gold_12.png","Gold_13.png","Gold_14.png","Gold_15.png","Gold_16.png","Gold_17.png","Gold_18.png","Gold_19.png","Gold_20.png","Gold_21.png","Gold_22.png","Gold_23.png","Gold_24.png","Gold_25.png","Gold_26.png","Gold_27.png","Gold_28.png","Gold_29.png","Gold_30.png")


	

}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	bg=createSprite(0,0,800,400);
	bg.addImage(backgroundimg);
	bg.velocityX=-2;
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  if(bg.x<0){
bg.x=bg.width/2;

  }
  drawSprites();
 
}




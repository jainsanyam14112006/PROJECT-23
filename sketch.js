var helicopterIMG, helicopterSprite, packageSprite, packageIMG,groundSprite,groundIMG;
var packageBody;
var box1,box2,box3;
var line1,line2,line3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
	
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 20,20);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

groundSprite=createSprite(width/2,height-35,width,10);
groundSprite.shapeColor=color(255);

line1=createSprite(width/2,height-50,200,20);
line1.shapeColor=color("red");
line2=createSprite(510,610,20,100);
line2.shapeColor=color("red");
line3=createSprite(310,610,20,100);
line3.shapeColor=color("red");

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 10 , {restitution:0.2, isStatic:true});
	World.add(world, packageBody);

	ground = Bodies.rectangle(width/2 , 650 ,width, 10 , {restitution:0.2, isStatic:true});
	World.add(world,ground);

	box2 = new Box(500,650,20,100,"red");
	box3 = new Box(295,650,20,100,"red");
	box1 = new Box(400,690,200,20,"red");
	
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y
  

  packageSprite.collide(line1);
  
  packageSprite.collide(line2);
  
  packageSprite.collide(line3);
  
  drawSprites();

function keyPressed(){
if(keyCode===DOWN_ARROW){
	Matter.Body.setStatic(packageBody,false);
}

}
	
	box1.display();
	box2.display();
	box3.display();

  engine.update(Engine);
}
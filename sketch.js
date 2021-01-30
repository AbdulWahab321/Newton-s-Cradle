
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const C = Matter.Constraint;

var wall,ball,chain;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	wall=new WallClass(400,10,750,20)
	ball=new Ball(350,400,50)
	//chain=new Rope(wall.body,ball.body,-ballDiameter*2,0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  Engine.update(engine);
  wall.display();
  ball.display();
  //chain.display();
  drawSprites();
 
}





const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1,bob2,bob3,bob4,bob5;
var roof1;
var rope1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	bob1=new Bob (280,500,30);
	bob2=new Bob (340,500,30);
	//center
	bob3=new Bob (400,500,30);
	bob4=new Bob (460,500,30);
	bob5=new Bob (520,500,30);

	roof1=new Roof (400,200,500,20);
	
	rope1=new Rope(280,200,bob1,roof1);
	rope2=new Rope(340,200,bob2,roof1);
	//center
	rope3=new Rope(400,200,bob3,roof1);
	rope4=new Rope(460,200,bob4,roof1);
	rope5=new Rope(520,200,bob5,roof1);
	
}


function draw() {
  rectMode(CENTER);
  background(0);
  
bob1.display();
bob2.display();
bob3.display();
bob4.display();
bob5.display();

rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();


roof1.display();

  drawSprites();
 
}


function keyPressed() {
	if (keyCode ==UP_ARROW ) {
	  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-75,y:-15});
	}
}


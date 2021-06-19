
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var grnd;
var stick1;
var stick2;	
var crubledpaper;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	grnd = new Ground(width/2,670,width,20);
	stick1=new stick(1200,660);
	crubledpaper=new paper(200,480,40);
	//stick2=new Dustbin(650,619,100,20);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  //drawSprites();
  grnd.display();
  stick1.display();
  crubledpaper.display();
  //stick2.display();
}
function keyPressed(){
	if(keyCode===UP_ARROW){
Matter.Body.applyForce(crubledpaper.body,crubledpaper.body.position,{x:85,y:-85})


	}
}



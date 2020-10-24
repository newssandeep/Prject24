const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper
var ground
var part1
var part2
var part3
function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(20,650,15);
	ground = new Ground(400,699,800,20);
	part1 = new Dustbin(580,640,20,100);
	part2 = new Dustbin(750,640,20,100);
	part3 = new Dustbin(660,680,170,20);
  
}

function draw() {
  background(0);
  Engine.update(engine);
  paper.display();
  part3.display();
  part1.display();
  part2.display();
  ground.display();
}

function keyPressed(){
	if (keyCode == UP_ARROW){
		Body.applyForce(paper.body, paper.body.position, {x: 35, y:-40});
	}
}

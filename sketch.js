const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var particles = [];
var plinkos = [];
var divisions = [];


var divisionHeight = 300;


function preload()
{
	
}

function setup() {
	createCanvas(480, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1 = new Ground(400, 780, 800, 10);

	division1 = new Divisions(5, 700, 5, 150);
	division2 = new Divisions(85, 700, 5, 150);
	division3 = new Divisions(165, 700, 5, 150);
	division4 = new Divisions(245, 700, 5, 150);
	division5 = new Divisions(325, 700, 5, 150);
	division6 = new Divisions(405, 700, 5, 150);
	division7 = new Divisions(475, 700, 5, 150);

	plinko1 = new Plinko(15, 100, 10);
	plinko2 = new Plinko(79, 100, 10);
	plinko3 = new Plinko(143, 100, 10);
	plinko4 = new Plinko(207, 100, 10);
	plinko5 = new Plinko(271, 100, 10);
	plinko6 = new Plinko(335, 100, 10);
	plinko7 = new Plinko(399, 100, 10);
	plinko8 = new Plinko(463, 100, 10);

	plinko9 = new Plinko(45, 200, 10);
	plinko10 = new Plinko(115, 200, 10);
	plinko11 = new Plinko(185, 200, 10);
	plinko12 = new Plinko(255, 200, 10);
	plinko13 = new Plinko(325, 200, 10);
	plinko14 = new Plinko(395, 200, 10);
	plinko15 = new Plinko(465, 200, 10);

	plinko16 = new Plinko(15, 300, 10);
	plinko17 = new Plinko(79, 300, 10);
	plinko18 = new Plinko(143, 300, 10);
	plinko19 = new Plinko(207, 300, 10);
	plinko20 = new Plinko(271, 300, 10);
	plinko21 = new Plinko(335, 300, 10);
	plinko22 = new Plinko(399, 300, 10);
	plinko23 = new Plinko(463, 300, 10);

	plinko24 = new Plinko(45, 400, 10);
	plinko25 = new Plinko(115, 400, 10);
	plinko26 = new Plinko(185, 400, 10);
	plinko27 = new Plinko(255, 400, 10);
	plinko28 = new Plinko(325, 400, 10);
	plinko29 = new Plinko(395, 400, 10);
	plinko30 = new Plinko(465, 400, 10);

	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  ground1.display();

  if(frameCount % 60 === 0)
  {
    particles.push(new Particle(random(width/2 - 10, width/2 + 10), 10, 10));
  }

  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();
  division7.display();

  plinko1.display();
  plinko2.display();
  plinko3.display();
  plinko4.display();
  plinko5.display();
  plinko6.display();
  plinko7.display();
  plinko8.display();

  plinko9.display();
  plinko10.display();
  plinko11.display();
  plinko12.display();
  plinko13.display();
  plinko14.display();
  plinko15.display();

  plinko16.display();
  plinko17.display();
  plinko18.display();
  plinko19.display();
  plinko20.display();
  plinko21.display();
  plinko22.display();
  plinko23.display();

  plinko24.display();
  plinko25.display();
  plinko26.display();
  plinko27.display();
  plinko28.display();
  plinko29.display();
  plinko30.display();

  

 
  
  drawSprites();
 
}




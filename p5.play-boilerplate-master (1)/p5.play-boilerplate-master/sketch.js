const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var plinkos = [];
var divisions = [];
var particles = [];
var divisionsHeight=300;
function setup() {
  createCanvas(480,800);
  engine = Engine.create();
	world = engine.world;
  
  ground1=new Ground(240,790,480,20);
for (var k =0; k <=width; k = k+80){
divisions.push(new Division(k, height-divisionsHeight/2,10,divisionsHeight));

}
for (var j = 40; j <=width; j=j+50)
{

  plinkos.push(new Plinko(j,75));
}
for (var j = 15; j <=width-10;j=j+50)
{

plinkos.push(new Plinko(j,175));
}

Engine.run(engine);
}

function draw() {
  background(0);  
  ground1.display();
for (var k = 0 ; k< divisions.length; k++){

  divisions[k].display();
}
for (var j = 0; j <particles.length;j++){


  particles[j].display();
}

}
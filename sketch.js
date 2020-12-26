const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Body = Matter.Body

var engine,world
var ground1
var dustbin1,paper1

function setup() {
  createCanvas(1200, 400);

  engine = Engine.create();
  world = engine.world;
  
  paper = new Paper(150,320,25)
  dustbin1 = new Dustbin(800,335,15,150)
  dustbin2 = new Dustbin(900,380,200,15)
  dustbin3 = new Dustbin(1000,335,15,150)
  ground = new Ground(600,392.5,1200,15)
}


function draw() {
  background(0)

  Engine.update(engine)
  
  paper.display()
  dustbin1.display()
  dustbin2.display()
  dustbin3.display()
  ground.display()
}

function keyPressed()
{
  if(keyCode === UP_ARROW) {
    Body.applyForce(paper.body,paper.body.position,{x:115,y:-115})
  }
}





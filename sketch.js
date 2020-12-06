const Engine=Matter.Engine
const Bodies=Matter.Bodies
const World=Matter.World

var engine,ball,ground,world


function setup() {
  createCanvas(1000,500);
  engine=Engine.create();
  world=engine.world;
  var options={
    isStatic:true
  }

  ground=Bodies.rectangle(400,390,1000,20,options)

  World.add(world,ground)
  var options_ball={
    restitution:0.8


  }
  ball=Bodies.circle(100,100,40,options_ball)
  World.add(world,ball)
}


function draw() {
  background("black"); 
  Engine.update(engine) 
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,800,20)
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,40,40)
}
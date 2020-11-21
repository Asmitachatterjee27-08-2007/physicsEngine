const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball, ball2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,400,20,ground_options);
    World.add(world,ground);

    var ball_options={
        restitution: 1
    }
    ball=Bodies.circle(200,100,10,ball_options);
    World.add(world,ball);
    console.log(ball);

    var ball2_options={
        restitution:1.5
    }
    ball2=Bodies.circle(100,100,15,ball2_options);
    World.add(world,ball2);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    fill("blue");
    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,10,10);
    fill("violet");
    ellipse(ball2.position.x,ball2.position.y,15,15);
}
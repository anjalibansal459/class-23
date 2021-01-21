const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var box2;
var box3;
var box4;
var box5;
var box6;
var ground;
var ball1;
var ball2;

function setup(){
    var canvas = createCanvas(800,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,300,50,50);
    box2 = new Box(220,300,50,50);
    box3 = new Box(240,300,50,50);
    box4 = new Box(260,300,50,50);
    box5 = new Box(280,300,50,50);
    box6 = new Box(300,300,50,50);
    ball1=new circle(200,100,50);
    ball2=new circle(200,150,50);

    ground=new Ground(320,550,1300,50)
}

function draw(){
    background(0);
    Engine.update(engine);
  
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    ground.display();
    ball1.display();
    ball2.display();
   
}
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var wall, window;

var tower1, tower2;
var mainWall;
var outerWall1, outerWall2;
var turret1, turret2, turret3, turret4;
var window1, window2, window3, window4, window5, window6, window7, window8;
var window9, window10, window11, window12, window13, window14, window15, window16;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  wall = "yellow";
  window = "red";
  tower1 = new Rect(300,300,60,200,wall);
  tower2 = new Rect(500,300,60,200,wall);
  mainWall = new Rect(400,320,140,160,wall);
  outerWall1 = new Rect(135,340,270,120,wall);
  outerWall2 = new Rect(665,340,270,120,wall);
  turret1 = new Rect(275,195,10,10,wall);
  turret2 = new Rect(325,195,10,10,wall);
  turret3 = new Rect(475,195,10,10,wall);
  turret4 = new Rect(525,195,10,10,wall);
  window1 = new Rect(290,250,10,10,window);
  window2 = new Rect(310,250,10,10,window);
  window3 = new Rect(290,270,10,10,window);
  window4 = new Rect(310,270,10,10,window);
  window5 = new Rect(490,250,10,10,window);
  window6 = new Rect(510,250,10,10,window);
  window7 = new Rect(490,270,10,10,window);
  window8 = new Rect(510,270,10,10,window);
  window9 = new Rect(350,290,10,10,window);
  window10 = new Rect(370,290,10,10,window);
  window11 = new Rect(350,310,10,10,window);
  window12 = new Rect(370,310,10,10,window);
  window13 = new Rect(430,290,10,10,window);
  window14 = new Rect(450,290,10,10,window);
  window15 = new Rect(430,310,10,10,window);
  window16 = new Rect(450,310,10,10,window);
}

function draw() {
  background("white");
  tower1.display();
  tower2.display();
  mainWall.display();
  outerWall1.display();
  outerWall2.display();
  turret1.display();
  turret2.display();
  turret3.display();
  turret4.display();
  window1.display();
  window2.display();
  window3.display();
  window4.display();
  window5.display();
  window6.display();
  window7.display();
  window8.display();
  window9.display();
  window10.display();
  window11.display();
  window12.display();
  window13.display();
  window14.display();
  window15.display();
  window16.display();
}
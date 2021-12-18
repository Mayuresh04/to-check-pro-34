const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bluecar , greyCar , yellowCar , redCar;
var road;
var b_img , g_img , y_img , r_img , road_img;


function preload(){
  road_img = loadImage("road.png");
  b_img    = loadImage("b_car.png");
}


function setup() {
  createCanvas(400,400);
  
  road = createsprite(380,380,20,20);
  road.addImage("road",road_img);

  bluecar = createsprite(350,350);
  bluecar.addImage("car",b_img);


  engine = Engine.create();
  world = engine.world;
  
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  drawSprites();
}


const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;
var snow = [];
var snow2 = [];

function preload() {
    backgroundImg = loadImage("snow3.jpg");
}

function setup(){
    var canvas = createCanvas(windowWidth,windowHeight);
    engine = Engine.create();
    world = engine.world;


    //snow = new Snow(600,50,70,70);
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    //strokeWeight(4);

    if (frameCount % 100 === 0){
        snow.push(new Snow(random(0,800),0,70,70))
          }

    if (frameCount % 150 === 0){
    snow2.push(new Snow2(random(0,800),0,70,70))
    }

    
    
    for (var k = 0; k < snow.length; k++) {
        snow[k].display();
      }
    for (var k = 0; k < snow2.length; k++) {
    snow2[k].display();
    }
}
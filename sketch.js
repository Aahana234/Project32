const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var apple1, apple2,apple3,apple4,apple5,apple6,apple7,apple8,apple9,apple10;
var stoneObj;
var rope;
var backgroundImage;
var boyImage;
var treeImage;

function preload(){
backgroundImage = loadImage("Sprites/BackgroundImage.jpg");
boyImage = loadImage("Sprites/boy.png");
treeImage = loadImage("Sprites/TreeImage.png");

}

function setup(){

createCanvas(1600,1200);

engine = Engine.create();
world = engine.world;


    apple1 = new Apple(890,500,20,150);
    apple2 = new Apple(690,560,20,400);
    apple3 = new Apple(680,670,20,500);
    apple4 = new Apple(820,500,20,90);
    apple5 = new Apple(1000,540,20,40);
    apple6 = new Apple(1040,690,20,20);
    apple7 = new Apple(1090,570,20,10);
    apple8 = new Apple(800,750,20,20);
    apple9 = new Apple(890,670,20,10);
    apple10 = new Apple(990,770,20,10);

stoneObj = new Stone(100,500,25);
rope = new Rope(stoneObj.body,{x:120,y:740});
fill("brown");
//tree = (100,200,120,70);
//tree.addImage(treeImage);

//boy = (300,350,100,80);
//boy.addImage(boyImage);
Engine.run(engine);


}

function draw(){
  Engine.update(engine);
rectMode(CENTER)
background(backgroundImage);


image(treeImage,600,400,600,650);
image(boyImage,100,700,300,200);

apple1.display();
apple2.display();
apple3.display();
apple4.display();
apple5.display();
apple6.display();
apple7.display();
apple8.display();
apple9.display();
apple10.display();
stoneObj.display();
rope.display();


detectollison(stoneObj,apple1);
detectollison(stoneObj,apple2);
detectollison(stoneObj,apple3);
detectollison(stoneObj,apple4);
detectollison(stoneObj,apple5);
detectollison(stoneObj,apple6);
detectollison(stoneObj,apple7);
detectollison(stoneObj,apple8);
detectollison(stoneObj,apple9);
detectollison(stoneObj,apple10);

  drawSprites();

}

function keyPressed(){

if(keyCode === 32){
rope.attach(stoneObj.body);
Matter.Body.setPosition(stoneObj.body,{x:100,y:500});
//launcherObject.attach(stoneObj.body);
}
}

function detectollison(lstone,lapple){
  appleBodyPosition=lapple.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,appleBodyPosition.x,appleBodyPosition.y)
  if(distance<=lapple.r+lstone.r)
  {
    Matter.Body.setStatic(lapple.body,false);
  }
  }
  function mouseDragged(){
  
      Matter.Body.setPosition(stoneObj.body,{x:mouseX , y:mouseY});
  
  }
  
  function mouseReleased(){
  
      rope.fly();
    
  }
   
   
 

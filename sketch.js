const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");

}

function setup(){
    


    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;
        //level one
block1 = new Box(300,275,30,40)
block2 = new Box(330,275,30,40)
block3 = new Box(360,275,30,40)
block4 = new Box(390,275,30,40)
block5 = new Box(420,275,30,40)
block6 = new Box(450,275,30,40)
block7 = new Box(480,275,30,40)
//level two
block8 = new Box(330,235,30,40)
block9 = new Box(360,235,30,40)
block10 = new Box(390,235,30,40)
block11 = new Box(420,235,30,40)
block12 = new Box(450,235,30,40)
//level three
block13 = new Box(360,195,30,40)
block14 = new Box(390,195,30,40)
block15 = new Box(420,195,30,40)
//top
block16 = new Box(390,155,30,40)

floor = new Ground(390,300,600,20)



    bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingShot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);

    //level one
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    //level two
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    //level three
    block13.display();
    block14.display();
    block15.display();
    //top
    block16.display();    

    bird.display()

    slingShot.display()

    floor.display()


}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingShot.fly();
}
function keyPressed()
{
if(keyCode === 32)
slingShot.attach(bird.body)
}
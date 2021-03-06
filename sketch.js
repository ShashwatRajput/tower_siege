const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(800, 350,70,70);
    pig1 = new Pig(870, 350);
    box2 = new Box(940,350,70,70);
    ground = new Ground(600,height,1200,20);
    log1 = new Log(870, 300, 210, PI/2);
    box3 = new Box(800, 260, 70, 70);
    box4 = new Box(940, 260, 70, 70);
    log2 = new Log(870, 230, 210, PI/2);
    pig2 = new Pig(870, 260);

}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    log2.display();
    pig2.display();
}
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bgImage;
var ground, platformA, platformB;
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13, block14, block15, block16, block17, block18, block19, block20, block21, block22, block23, block24, block25;
var block26, block27, block28, block29, block30, block31, block32, block33, block34, bloc35, block36, block37, block38, block39, block40, block41;
var polygon, slingshot;
var gameState = "onSling";

function preload() {
    bgImage = loadImage("bg.jpg");
}

function setup() {
    createCanvas(1289, 621);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(width / 2, height, width, 40);

    platformA = new Ground(width / 2, height / 1.5, width / 4, 20)
    platformB = new Ground(width / 1.25, height / 3, width / 5, 20)

    polygon = new Polygon(200, 300, 50);

    slingshot = new Slingshot(polygon.body, { x: 200, y: 300 });

    block1 = new Block(525, 350, 30, 40);
    block2 = new Block(555, 350, 30, 40);
    block3 = new Block(585, 350, 30, 40);
    block4 = new Block(615, 350, 30, 40);
    block5 = new Block(645, 350, 30, 40);
    block6 = new Block(675, 350, 30, 40);
    block7 = new Block(705, 350, 30, 40);
    block8 = new Block(735, 350, 30, 40);
    block9 = new Block(765, 350, 30, 40);
    block10 = new Block(555, 300, 30, 40);
    block11 = new Block(585, 300, 30, 40);
    block12 = new Block(615, 300, 30, 40);
    block13 = new Block(645, 300, 30, 40);
    block14 = new Block(675, 300, 30, 40);
    block15 = new Block(705, 300, 30, 40);
    block16 = new Block(735, 300, 30, 40);
    block17 = new Block(585, 250, 30, 40);
    block18 = new Block(615, 250, 30, 40);
    block19 = new Block(645, 250, 30, 40);
    block20 = new Block(675, 250, 30, 40);
    block21 = new Block(705, 250, 30, 40);
    block22 = new Block(615, 200, 30, 40);
    block23 = new Block(645, 200, 30, 40);
    block24 = new Block(675, 200, 30, 40);
    block25 = new Block(645, 150, 30, 40);

    block26 = new Block(940, 150, 30, 40);
    block27 = new Block(970, 150, 30, 40);
    block28 = new Block(1000, 150, 30, 40);
    block29 = new Block(1030, 150, 30, 40);
    block30 = new Block(1060, 150, 30, 40);
    block31 = new Block(1090, 150, 30, 40);
    block32 = new Block(1120, 150, 30, 40);
    block33 = new Block(970, 100, 30, 40);
    block34 = new Block(1000, 100, 30, 40);
    block35 = new Block(1030, 100, 30, 40);
    block36 = new Block(1060, 100, 30, 40);
    block37 = new Block(1090, 100, 30, 40);
    block38 = new Block(1000, 50, 30, 40);
    block39 = new Block(1030, 50, 30, 40);
    block40 = new Block(1060, 50, 30, 40);
    block41 = new Block(1030, 0, 30, 40);
}

function draw() {
    background(bgImage);
    Engine.update(engine);

    strokeWeight(2);
    stroke("darkBlue");
    textFont("Georgia");
    fill("red");
    textSize(25);
    text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks.", 150, 50);

    ground.display();
    platformA.display();
    platformB.display();
    polygon.display();
    slingshot.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    block22.display();
    block23.display();
    block24.display();
    block25.display();
    block26.display();
    block27.display();
    block28.display();
    block29.display();
    block30.display();
    block31.display();
    block32.display();
    block33.display();
    block34.display();
    block35.display();
    block36.display();
    block37.display();
    block38.display();
    block39.display();
    block40.display();
    block41.display();
}

function mouseDragged(){
    if(gameState==="onSling"){
        Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
    } 
}

function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed() {
    if (keyCode === 32) {
        slingshot.attach(polygon.body);
        gameState = "onSling";
    }
}
// You could have multiple flags like: start, launch to indicate the state of the game.

// The above line creates different constant variables for Engine, World, Bodies etc.

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var ground,cannonBall,cannonBall2;



function setup() {
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
var canvas=createCanvas(1000,600);
engine = Engine.create(); 
world = engine.world;
cannonBall2 = new CannonBall(75,-20,50,30);
cannonBall = new CannonBall(200,590,100,70);
ground= new Ground(500,height,1000,20);
}

function draw() {
// Remember to update the Matter Engine and set the background.
background(0);
Engine.update(engine);
ground.display();
cannonBall.display();
cannonBall2.display();
cannonBall2.collide(ground);

}

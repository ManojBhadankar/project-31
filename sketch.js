const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var particles=[];
var plinkos=[];
var divisions=[];
var divisionHeight=300;

var engine, world;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

ground=new Ground(400,650,800,20);

for (var k=0; k <=width-10; k=k + 80){
  divisions.push(new Division(k,height-divisionHeight/1,10,divisionHeight));
}

for (var j=40; j<=width-10; j=j+50){
  plinkos.push(new Plinko(j,75));
}

for (var j = 15; j <=width-10; j=j+50){
  plinkos.push(new Plinko(j,175));
}

for (var j=40; j<=width-10; j=j+50){
  plinkos.push(new Plinko(j,75));
}
for (var j = 15; j <=width-10; j=j+50){
  plinkos.push(new Plinko(j,175));
}
for (var j=40; j<=width-10; j=j+50){
  plinkos.push(new Plinko(j,75));
}
for (var j=15; j<=width-10; j=j+50){
  plinkos.push(new Plinko(j,175));
}
for (var j=40; j<=width-10; j=j+50){
  plinkos.push(new Plinko(j,75));
}


}
function draw() {
  background("black");  

  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-20,width/2+10),10,10));
  }

  for (var j=0; j < particles.length; j++){
    particles[j].display();
  }

  for (var k=0; k < divisions.length; k++){
    divisions[k].display();
  }

  for (var l=0; l < plinkos.length; l++){
    plinkos[l].display();
  }

ground.display();

  drawSprites();
}
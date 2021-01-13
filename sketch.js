var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var divisions = [];
var particles = [];
var plinkos = [];

var divisionHeight=300;
var score =0;
var particle = null;
var turn = 0;
var count = 0;



var gameState = "start";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
  text("Score : "+score,20,30);
  text("500",25,600);
  text("500",105,600);
  text("500",185,600);
  text("500",265,600); 
  text("100",345,600);
  text("100",425,600);
  text("500",505,600);
  text("500",585,600);
  text("500",665,600);
  text("500",745,600);


  Engine.update(engine);

  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
  // if(frameCount%60===0){
  //   particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
  //   score++;
  // }
 
  //for (var j = 0; j < particles.length; j++) {
   //  particles[j].display();
  // }


  if (particle !== null)
  {
     particle.display();

     if(particle.body.position.y>700){
       if(particle.body.position.x<300){
         score =score+500;
         particle = null;
         if(count>=5) gameState = "end";
       }else if(particle.body.position.x>300 && particle.body.position.x<500){
        score =score+100;
        particle = null;
         if(count>=5) gameState = "end";
       }else if(particle.body.position.x>500){
        score =score+500;
        particle = null;
         if(count>=5) gameState = "end";
       }
     }
  }

  if (gameState === "end"){
    textSize(50)
    text("GameOver",300,400);
  }

   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
}


function mousePressed(){
  if(gameState !== "end"){
    count++;
    particle = new Particle(mouseX,10,10)
    console.log(particle.display());
  }
}
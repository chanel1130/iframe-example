let g = 0;
let cloud = [];
let s = 200;
let a = 20;
let r = 20;
let yoff = 0;
let c;
let sound = [];

function setup() {
  c = color(255);
  colorMode(HSB, 100);
  let cnv= createCanvas(windowWidth,windowHeight);
  cnv.parent("canvasContainer");

  // sound[0]= loadSound("Boys don't cry..mp3");
  // sound[1] = loadSound("girls are more fragile.mp3");
  // sound[2] = loadSound("Girls are good with language..mp3");
  // sound[3] = loadSound("boys like video games.mp3");
  // sound[4] = loadSound("Women are emotional.mp3");
  // sound[5] = loadSound("Boys are good at math.mp3");
  // sound[6] = loadSound("Girls only like dolls and role playing.mp3");
  // sound[7] = loadSound("Boys are only interested in playing with cars and trucks and building things.mp3");
  // sound[8] = loadSound("Men should be the financial providers for their family.mp3");
  // sound[9] = loadSound("Men don't do household chores.mp3");
  // sound[10] = loadSound("Boys shouldn't be dressed in pink.mp3");
  //  sound[11] = loadSound("It's pink It's for girls.mp3");
  // sound[12] = loadSound("Men are leaders.mp3");


  sound[0] = new Audio("sound/Boys don't cry..mp3");
  sound[1] = new Audio("sound/girls are more fragile.mp3");
  sound[2] = new Audio("sound/Girls are good with language..mp3");
  sound[3] = new Audio("sound/boys like video games.mp3");
  sound[4] = new Audio("sound/Women are emotional.mp3");
  sound[5] = new Audio("sound/Boys are good at math.mp3");
  sound[6] = new Audio("sound/Girls only like dolls and role playing.mp3");
  sound[7] = new Audio("sound/Boys are only interested in playing with cars and trucks and building things.mp3");
  sound[8] = new Audio("sound/Men should be the financial providers for their family.mp3");
  sound[9] = new Audio("sound/Men don't do household chores.mp3");
  sound[10] = new Audio("sound/Boys shouldn't be dressed in pink.mp3");
   sound[11] = new Audio("sound/It's pink It's for girls.mp3");
  sound[12] = new Audio("sound/Men are leaders.mp3");



  // for(let i=0; i< 5; i++){
  //   cloud[i] = new Cloud(random(width), random(height), random(50,100));
  // }
}

function draw() {
  background(0);
  var c = 255;
  for (let i = 0; i < cloud.length; i++) {
    cloud[i].show();
    cloud[i].move();
    cloud[i].bounce();
  }
  for(let a1=0;a1<width; a1+=50){
  
  for(let b1=0; b1<height; b1+=50){
    let d=dist(mouseX,mouseY,a1,b1);
    let f=map(d,0,sqrt(width**2+height**2),0.09,2); 
    fill(a1,20,20) ;

  push();
  rectMode(CENTER);
  translate(a1,b1);
    noStroke();
    strokeWeight(0.1)
  fill(c,30,10)
  rotate(g);
  
  rect(0,0,7*f,90*f,100);
  pop();

    }

  g+=PI/4000;

  }
}

function mousePressed() {
  fill(color(c),color(c),color(c))
  cloud.push(new Cloud(mouseX, mouseY, 10*frameCount));
  let r = floor(random(13));
  //console.log(r)
  sound[r].play();
  // mySound1.play();
  // mySound.play();
  // mySound2.play();
  
}

class Cloud {
  constructor(x, y, s) {
    this.x = x;
    this.y = y;
    this.s = s;
    this.r = r;
    this.color = random(100);
    this.speedX = random(-0.5, 0.5);
    this.speedY = random(-0.5, 0.5);
    
    var yoff = 0;
  }
  

  show() {
    push();
  
   
//     translate(this.x, this.y);
//     // stroke(100*sin(frameCount*20));
//     noStroke()
//     fill(this.color,10);
//     for (let b = 2; b<50; b+=4){
      
    
//     circle(0, 0, 500-b); 
//     }
    translate(this.x, this.y);
    noStroke();
  
    beginShape();
    var xoff = 0;
    
     for (var h = 0; h < TWO_PI; h+=random(0.05,0.1)){
var offset = map(noise(xoff,yoff)*sin(frameCount*0.01),0,1,-2,2);
       fill(random(100,255),70)
       var r = this.r + offset;
      var x = r*cos(h)*6;
      var y = r*sin(h)*6;
      vertex(x,y);
      xoff+=0.1;
      
    
    }
    
    endShape();
    pop();
    
    yoff += 0.01;


   
  }

  move() {
    this.x += this.speedX;
    this.y += this.speedY;
  }
  bounce() {
    if (this.x < 0 || this.x > width) {
      this.speedX = -this.speedX;
    }
    if (this.y < 0 || this.y > height) {
      this.speedY = -this.speedY;
    }
    
  }
 checkCollision(other) {
    let d = dist(this.x, this.y, other.x, other.y);
    if (d < ((this.s + other.s) * 1.5) / 2) {
      this.speedX = -this.speedX;
      this.speedY = -this.speedY;
      other.speedX = -other.speedX;
      other.speedY = -other.speedY;
     this.s = 0;
    }
 }
}

function keyPressed() {
  if (keyPressed) {
    key = "f";
    let fs = fullscreen();
    fullscreen(!fs);
    
  }  
  
  
  
}

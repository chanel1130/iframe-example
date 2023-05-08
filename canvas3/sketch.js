let c;
let particles = [];
const num = 1000;
c = 0;
let sound = [];


const noiseScale = 0.01/2;

function setup() {
  let canvas = createCanvas(1800,800);
  canvas.parent("canvasContainer");
  sound[0] = new Audio("sound/2.1.MP3");
  sound[1] = new Audio("sound/3.1.MP3");
  sound[2] = new Audio("sound/4.1.MP3");
  sound[3] = new Audio("sound/5.1.MP3");
  sound[4] = new Audio("sound/6.1.MP3");
  sound[5] = new Audio("sound/7.1.MP3");
  sound[6] = new Audio("sound/8.1.MP3");
  sound[7] = new Audio("sound/9.1.MP3");
  sound[8] = new Audio("sound/10.1.MP3");
  sound[9] = new Audio("sound/11.1.MP3");
  sound[10] = new Audio("sound/13.1.MP3");
  sound[12] = new Audio("sound/15.1.MP3");
  sound[13] = new Audio("sound/16.1.MP3");
  sound[14] = new Audio("sound/17.1.MP3");
  sound[15] = new Audio("sound/18.1.MP3");
  sound[16] = new Audio("sound/19.1.MP3");
  sound[17] = new Audio("sound/20.1.MP3");
  sound[18] = new Audio("sound/21.1.MP3");

sound1 = new Audio("sound/vietra - fly.mp3")
  
  c = color(c);

  for(let i = 0; i < num; i ++) {
    particles.push(createVector(random(width), random(height)));
  }
  

  stroke(255, 20);
  clear();
}

function draw() {
  background(0, 10);
  for(let i = 0; i < num; i ++) {
    let p = particles[i];
    
    ellipse(p.x, p.y,5);
    let n = noise(p.x * noiseScale, p.y * noiseScale, frameCount * noiseScale * noiseScale);
    let a = TAU * n;
    p.x += cos(a);
    p.y += sin(a);
    if(!onScreen(p)) {
      p.x = random(width);
      p.y = random(height);
    }
  }

}

function mousePressed() {
  let r = floor(random(19));
  //console.log(r)
  

  sound[r].play();
  
 
  fill(random(color(c)),random(color(c)),random(color(c)))
  noiseSeed(millis());

    stroke(100*sin(frameCount*20));
    noStroke()
    fill(2+random(0,255),10+random(0,255),150+random(0,255),50);
    for (let b = 2; b<50; b+=4){
    circle(mouseX,mouseY, 100-b); 
    }


    // sound1.setVolume(0.2);
    sound1.play();
    
   
}

function onScreen(v) {
  return v.x >= 0 && v.x <= width && v.y >= 0 && v.y <= height;
}
// function keyPressed() {
  

  // if (keyPressed) {
  //   key = "f";
  //   let fs = fullscreen();
  //   fullscreen(!fs);
   
  //   if(mouseIsPressed){
  //     sound1.setVolume(0.2) 
  //     sound1.play();
  //    }else{
  //     sound1.setVolume(1);
  //     sound1.play();
  //    }
  //  sound1.play();
  
    
  // }
// }

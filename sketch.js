
let angle =0
function setup() {
  createCanvas(windowWidth,windowHeight);
  background(0)
  rectMode(CENTER)
  noFill()
  angleMode(DEGREES)

  points = font.textToPoints("aboboc", -300, 80, 200, {
    sampleFactor:0.2
  }); 
  //frameRate(10)
}

let font; 
let points = []; 
let r=15

function preload(){ 
    font = loadFont("fonts/NotoSansTC-VariableFont_wght.ttf") 
}

function draw() {
  background(0);
  for(let y =0;y<height;y = y+105){
  for(let x =0;x<width;x = x+105){
  push()
    translate(x,y)
    for(let i=0;i<5;i=i+1){
      let r = map(sin(frameCount),-1,1,50,255)
      let g = map(cos(frameCount/2),-1,1,50,255)
      let b = map(sin(frameCount/4),-1,1,50,255)
      
      stroke(r,g,b)
      rotate(angle)
      rect(0,0,100-i*3,100-i*3,20) 
      angle = sin(frameCount) * (mouseX/20)
    }
  pop()

  push()
    translate(mouseX,mouseY)
    for (let j=0; j<points.length-1; j++) { 
    fill("#fb6f92")
    noStroke()
    ellipse(points[j].x+r*sin(angle+j*15),points[j].y,10)
    strokeWeight(6)
    stroke("#fb6f92")
    line(points[j].x+r*sin(angle+j*15),points[j].y,points[j+1].x+r*sin(angle+j*15),points[j+1].y)
   }
  angle= angle + 10
  pop()
  }
 }
}

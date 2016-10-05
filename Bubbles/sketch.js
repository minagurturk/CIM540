var bubbles = [];

function setup() {
  createCanvas(600, 400);
  for (var i = 0; i < 200; i++) {
    bubbles[i] = new Bubble();
  }  
}

function draw() {
  background(0);
  
  for (var i = 0; i < bubbles.length; i++) {
  bubbles[i].move();
  bubbles[i].display();
}
}

function Bubble() {
  this.x = random(0, width);
  this.y = random(0, height);

  this.display = function() {
    stroke(120,0,0);
    fill(200,100,0,100);
    ellipse(this.x, this.y, 24, 24);
  }

  this.move = function() {
    this.x = this.x + random(-1, 2);
    this.y = this.y + random(-1, 2);

   
  }
}
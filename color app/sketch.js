var boundary1 = 0;
var boundary2 = 0;
var boundary3 = 0;

var topBoundary = 0;
var bottomBoundary = 0;

var buttonSize = 100;

var currentArea = "";

var brushColor = "black";

function setup() {
 createCanvas(300, 400);
  boundary0 = 0;
  boundary1 = 100;
  boundary2 = 200;
  boundary3 = width;
  
  topBoundary = 300;
  bottomBoundary = height;
  
}

function draw() {
  //background(255);
  //interface

  fill("blue");
  rect(boundary0, topBoundary, buttonSize, buttonSize);
  fill("red");
  rect(boundary1, topBoundary, buttonSize, buttonSize);
  fill("yellow");
  rect(boundary2, topBoundary, buttonSize, buttonSize);


fill(brushColor);
  ellipse(mouseX, mouseY, 10, 10);
  console.log(currentArea);
  if (mouseY >= topBoundary && mouseY < bottomBoundary) {
    //console.log("Inside User Interface Area");
  if (mouseX > boundary1 && mouseX < boundary2) {
      //  console.log("area0");
      currentArea = "area0";
    } else if (mouseX > boundary2 && mouseX < boundary3) {
      //  console.log("area1");
      currentArea = "area1";
    }
  } else {
    currentArea = "";
  }
}

function mousePressed() {
  console.log(currentArea);
  if (currentArea == "area0") {
    brushColor = "red";
  } else if (currentArea == "area1") {
 brushColor = "yellow";
  } else {
    brushColor = "black";
  }
}
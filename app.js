const RADIUS = 10;
const WEIGHT = 5;
const LENGTH = 200;
const g = 1.0;
//const m = 1.0;

var omega = 0.0;
var theta = Math.PI/2;
var omega2 = omega;
var theta2 = theta;

var holding = false;

function getRandomInt(min, max) {
  return min+Math.floor(Math.random() * Math.floor(max-min));
}

function preload(){
    
}

function setup(){
    var canvas = createCanvas(600,300);
    canvas.parent('canvas');
    textSize(20);
    stroke(0,0,0);
    fill(0,0,0);
    background(255,255,255);
}

function mousePressed(){
    holding = true;
    
}

function mouseReleased() {
    holding = false;

}

function touchStarted(){
    mousePressed();
}

function touchEnded(){
    mouseReleased();
}

function draw(){
    fill(255,255,255);
    rect(0,0,width,height);
    translate(width/2, RADIUS*3);
    fill(0,0,0);
    circle(0,0,RADIUS);
    strokeWeight(WEIGHT);

    // Exact
    // mr(theta)'' = -mg*sin(theta)
    // (theta)'' = -g*sin(theta)/r

    omega -= g/LENGTH * sin(theta);
    theta += omega;
    
    var x = LENGTH*Math.sin(theta);
    var y = LENGTH*Math.cos(theta);

    line(0,0,x,y);
    circle(x,y,RADIUS*2);

    // Approximate
    // (theta)'' = -g*theta/r
    
    omega2 -= g/LENGTH * theta2;
    theta2 += omega2;
    
    var x2 = LENGTH*Math.sin(theta2);
    var y2 = LENGTH*Math.cos(theta2);

    fill(255,0,0);
    line(0,0,x2,y2);
    circle(x2,y2,RADIUS*2);
}
const RADIUS = 10;
const WEIGHT = 5;
const LENGTH = 200;
const g = 1.0;
//const m = 1.0;

var omega = 0.0;
var theta = Math.PI/6;
var x_app = LENGTH * Math.sin(theta);
var v_app = 0.0;

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

    //Exact
    //mrw'' = -mg*sin(theta)
    //w'' = -g/r*sin(theta)

    omega -= g/LENGTH * sin(theta);
    theta += omega;
    
    var x = LENGTH*Math.sin(theta);
    var y = LENGTH*Math.cos(theta);

    line(0,0,x,y);
    circle(x,y,RADIUS*2);

    //Approximate
    //mx'' = -mgx/r
    //x'' = -gx/r
    
    v_app += -g*x_app/LENGTH;
    x_app += v_app;
    if(x_app>LENGTH)x_app=LENGTH;
    var y_app = Math.sqrt(1-x_app*x_app/LENGTH/LENGTH)*LENGTH;

    fill(255,0,0);
    line(0,0,x_app,y_app);
    circle(x_app,y_app,RADIUS*2);
}
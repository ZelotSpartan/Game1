var ship;
function setup() {
  createCanvas(600,400);
  ship = new Ship();
  
}

function draw() {
  background(51);
  ship.show();
  if(keyIsDown(RIGHT_ARROW)){
    ship.move(1);
  }else if(keyIsDown(LEFT_ARROW)){
    ship.move(-1);
  }
}

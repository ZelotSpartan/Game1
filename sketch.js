var ship;
var h2o = [];
var fire = [];

function setup() {
	document.getElementById("ver").innerHTML+="j1.1";
  createCanvas(600,400);
  ship = new Ship();
  //fire = new Projectile(ship.x,ship.y);
  for(var i = 0; i < 5; i++){
    h2o[i]=new Enemy(i);
  }
}

function draw() {
  background(51);
  ship.show();
  for(var i = 0; i < h2o.length; i++){
    h2o[i].show();
  }
  for(var i = 0; i < fire.length; i++){
    fire[i].show();
    fire[i].move();
    for(var j = 0; j < h2o.length; j++){
      if(fire[i].hits(h2o[j])){
        h2o.splice(j,1);
        fire[i].del();
      }
    }
    if(fire[i].y<0){
      fire.splice(i,1);
    }
  }
  for(var i = fire.length-1; i>=0; i--){
    if(fire[i].dele){
      fire.splice(i,1);
    }
  }
  //fire.move();
  //fire.show();
  
  
  
  if(keyIsDown(RIGHT_ARROW)){
    ship.move(3);
  }else if(keyIsDown(LEFT_ARROW)){
    ship.move(-3);
  }
}


function keyPressed(){
  if(key === " "){
    fire.push(new Projectile(ship.x,ship.y));
  }
}
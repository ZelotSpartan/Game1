var ship;
var h2o = [];
var fire = [];
var sX,eX,dX,dela=5;
var d,n,n1,nt;
function setup() {
	document.getElementById("ver").innerHTML+="j1.2";
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
    ship.move(2);
  }else if(keyIsDown(LEFT_ARROW)){
    ship.move(-2);
  }
}


function keyPressed(){
  if(key === " "||keyCode===UP_ARROW){
    fire.push(new Projectile(ship.x,ship.y));
  }
}

function touchStarted(){
	sX=touchX;
	d=new Date();
	n=d.getTime();
}
function touchMoved(){
	eX=touchX;
	dX=eX-sX;
	if(dX>1){
		ship.move(2);
	}
	if(dX<1){
		ship.move(-2);
	}
	dela--;
	if(dela<=0){
	sX=eX;
	dela=5;
	}
}
function touchEnded(){
	d=new Date();
	n1=d.getTime();
	nt=n1-n;
	if(nt<=500){
		fire.push(new Projectile(ship.x,ship.y));
	}
	}
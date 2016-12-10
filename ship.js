function Ship(){
  this.x = width/2;
  this.y=height-40;
  this.show = function(){
    fill(0,255,0);
    rect(this.x, this.y,20,40);
    //fill(0,0,255);
    //rect(this.x,this.y,20,-height);
  }
  this.move = function(dir){
  	if(!(this.x+dir<0||this.x+dir>width-20)){
    this.x+=dir;
  	}
  }
}
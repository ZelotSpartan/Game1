function Ship(){
  this.x = width/2;
  this.y=height-40;
  this.show = function(){
    fill(0,255,0);
    rect(this.x, this.y,20,40);
  }
  this.move = function(dir){
    this.x+=dir;
  }
}
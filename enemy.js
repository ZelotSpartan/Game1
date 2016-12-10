function Enemy(dir){
  this.x = width/6*(dir+1);
  this.y = 60;
  this.r = 24;
  this.show = function(){
    fill(0,0,255);
    ellipse(this.x,this.y,40,40);
    fill(255);
    ellipse(this.x-15,this.y+10,20,20);
    ellipse(this.x+15,this.y+10,20,20);
  }
}
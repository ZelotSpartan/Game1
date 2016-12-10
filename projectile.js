function Projectile(x,y){
  this.x = x;
  this.y = y;
  this.r = 10;
  this.dele = false;
  this.show = function(){
    fill(250,0,0);
    ellipse(this.x+10,this.y-10,this.r*2,this.r*2);
  }
  this.move = function(){
    this.y = this.y - 5;
  }
  this.hits = function(enemy){
    var d = dist(this.x,this.y,enemy.x,enemy.y);
    if(d<this.r+enemy.r){
      return true;
    }else{
      return false;
    }
  }
  
  this.del = function(){
    this.dele = true;
  }
}
class Particle {
constructor(x,y,r){
var  option = {
restitution:0.5

}
this.body=Bodies.circle(x,y,r,option);
this.color=color(random(0,255),random(0,255),random(0,255))
this.r=r;
World.add(world,this.body);

}
display(){
var angle = this.body.angle;
push();
translate(this.body.position.x,this.body.position.y)
rotate(angle)

ellipseMode(CENTER);
ellipse(0,0,this.r,this.r);
pop();
}
}
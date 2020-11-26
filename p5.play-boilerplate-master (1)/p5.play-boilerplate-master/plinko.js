class Plinko {
constructor(x,y){
var option = {

isStatic:true

}
this.body=Bodies.circle(x,y,10,option)
World.add(world,this.body);

}
display() {

var angle = this.body.angle
push()
translate(this.body.position.x,this.body.position.y)


rotate(angle)
fill("white")
    ellipseMode(CENTER)
ellipse(0,0,10,10);
pop()
}
}
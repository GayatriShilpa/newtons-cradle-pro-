class Rope{
    constructor(offsetX,offsetY,bodyA,bodyB){
        this.offsetX=offsetX;
        this.offsetY=offsetY;
        var options={
            bodyA:bodyA.body,
            bodyB:bodyB.body,
            pointB:{x:this.offsetX,y:this.offsetY}
        }
    this.bodyA=bodyA.body;
    this.bodyB=bodyB.body;

     this.rope = Matter.Constraint.create(options);
     World.add(world,this.rope);

     var point1=this.bodyA.position;
     console.log(point1.x, point1.y, this.offsetX, this.offsetY);
    }
    display(){
        var point1=this.bodyA.position;
        stroke("white")
        line(point1.x, point1.y, this.offsetX, this.offsetY);
        
    }
} 


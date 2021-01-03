class Roof{
    constructor(x,y,width,height){
       this.roof=Bodies.rectangle(x,y,width,height,{isStatic:true});
       this.x=x;
       this.y=y;
       this.width=width;
       this.height=height;
       World.add(world,this.roof);
   }   
   
   
   display(){
      
       rectMode(CENTER);
       fill("white");
       rect(this.roof.position.x,this.roof.position.y,this.width,this.height);
      
   }
   }
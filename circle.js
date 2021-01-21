class circle{
    constructor(x,y,radius){
        var options={
            //isStatic=true
           restitution:1

        }
        this.body=Bodies.circle(x,y,radius,options)
        this.radius=radius
        //this.width=width;
        //this.height=height;
        World.add(world,this.body);

    }
    display(){
var pos=this.body.position;
ellipseMode(RADIUS)
fill("orange");
ellipse(pos.x,pos.y,this.radius);

    }
}
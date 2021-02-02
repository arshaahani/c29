class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.2,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        this.sling1=loadImage("sprites/sling1.png")
        this.sling2=loadImage("sprites/sling2.png")
        this.sling3=loadImage("sprites/sling3.png")
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.sling1,200,120)
        image(this.sling2,170,120)
        
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            stroke(48,22,8)
            if(pointA.x<220){
                line(pointA.x-25, pointA.y, pointB.x-30, pointB.y);
                line(pointA.x-25,pointA.y,pointB.x+30,pointB.y);
                image(this.sling3,pointA.x-25,pointA.y-10,15,25)
            }
            else
            {
                line(pointA.x+25, pointA.y, pointB.x-30, pointB.y);
                line(pointA.x+25,pointA.y,pointB.x+30,pointB.y);
                image(this.sling3,pointA.x+25,pointA.y-10,15,25)
            }


        }
    }
    
}